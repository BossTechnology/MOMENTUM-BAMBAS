import { create } from "zustand";
import { NerdGraphQuery } from "nr1";
import transformPanelData from "../tools/transformPanelData.js";
import touchpointsArray from "../tools/touchpointsArray.js";
import ACCOUNT_ID from "../credentials.js";

import stages from "../../data/journey/stages/stages.js";

// ---- helpers ----
const accountId = ACCOUNT_ID || 7131997;

// turn numeric-looking strings into numbers
function convertStringsToNumbers(obj) {
  const out = {};
  for (const [key, val] of Object.entries(obj)) {
    if (val === null || val === undefined) {
      out[key] = val;
    } else if (typeof val === "string" && /^-?\d+(\.\d+)?$/.test(val)) {
      out[key] = Number(val);
    } else if (typeof val === "object" && !Array.isArray(val)) {
      out[key] = convertStringsToNumbers(val);
    } else {
      out[key] = val;
    }
  }
  return out;
}

// helper to coerce lower/upper to number or null
function toNumberOrNull(v) {
  if (v === null || v === undefined) return null;
  if (typeof v === "number") return v;
  if (typeof v === "string" && /^-?\d+(\.\d+)?$/.test(v)) return Number(v);
  return null;
}

// touchpoints array -> { metricName: {lower:Number|null, upper:Number|null}, ... }
function toLimitsMap(arr) {
  const out = {};
  for (const obj of arr) {
    const [[key, val]] = Object.entries(obj);
    out[key] = {
      lower: toNumberOrNull(val.lower),
      upper: toNumberOrNull(val.upper)
    };
  }
  return out;
}

// Query NerdGraph NRQL
async function runNrql(nrql) {
  const gql = `
    query($accountId:Int!) {
      actor {
        account(id: $accountId) {
          nrql(query: "${nrql}") { results }
        }
      }
    }
  `;
  const resp = await NerdGraphQuery.query({
    query: gql,
    variables: { accountId }
  });

  let results = resp?.data?.actor?.account?.nrql?.results ?? [];
  results = results.map((r) => convertStringsToNumbers(r));

  return results;
}

// scoring formula from outOfRangeCount
function scoreFromOutOfRange(outOfRangeCount) {
  const score = 100 - outOfRangeCount * 10;
  return Math.max(0, Math.min(100, score)); // clamp 0–100
}

function buildStagesWithPercentage(baseStages, journeyRows) {
  const safeRows = Array.isArray(journeyRows) ? journeyRows : [];

  return baseStages.map((stage) => {
    const match = safeRows.find((row) => row.facet === stage.idStage);

    if (match && typeof match.outOfRangeCount === "number") {
      return {
        ...stage,
        percentage: scoreFromOutOfRange(match.outOfRangeCount)
      };
    }

    // Fallback: stage not present in this dataset
    return {
      ...stage,
      percentage: 0
    };
  });
}

// ---- store ----
export const useDataStore = create((set, get) => ({
  // ------------------------------------------------------------------
  // UI STATE / MODAL STATE
  // ------------------------------------------------------------------
  isModalOpen: false,
  selectedItem: null, // this is the clicked stage

  openModal: (item) =>
    set({
      isModalOpen: true,
      selectedItem: item
    }),

  closeModal: () =>
    set({
      isModalOpen: false,
      selectedItem: null
    }),

  // ------------------------------------------------------------------
  // AI CACHE (per stage)
  // ------------------------------------------------------------------
  // stageAiById: map like:
  // {
  //   "Fully Loaded": { title: "Completamente cargado", answer: "AI summary..." },
  //   "Traveling Empty": { title: "Viajando vacío", answer: "..." }
  // }
  stageAiById: {},

  /**
   * Save AI answer for a given stage so Tooltip and Modal can reuse it
   */
  setStageAiAnswer: (stageObj, aiAnswer) => {
    if (!stageObj) return;

    // Build a key that is stable per stage
    const key = stageObj.idStage || stageObj.label || stageObj.name || "unknown";

    // Title we want to show in Tooltip / modal header
    const title =
      stageObj.tooltip?.title ||
      stageObj.label ||
      stageObj.name ||
      stageObj.idStage ||
      "Sin título";

    set((state) => ({
      stageAiById: {
        ...state.stageAiById,
        [key]: {
          title,
          answer: aiAnswer
        }
      }
    }));
  },

  /**
   * Get cached AI data for a given stage
   * returns { title, answer } or null
   */
  getStageAiAnswer: (stageObj) => {
    if (!stageObj) return null;

    const key = stageObj.idStage || stageObj.label || stageObj.name || "unknown";

    return get().stageAiById[key] || null;
  },

  // ------------------------------------------------------------------
  // DATA FROM NRDB / JOURNEY DATA
  // ------------------------------------------------------------------
  isLoading: true,
  isError: false,
  errorMsg: "",
  rawResults: [], // raw NRQL result rows
  jurneyData: { data: [] },

  // stages decorated with live percentage
  stagesWithPercentage: [],

  /**
   * fetchPanelsData:
   * - run NRQL
   * - transform into jurneyData
   * - build stagesWithPercentage (percentage health per stage)
   */
  fetchPanelsData: async (nrqlQuery) => {
    try {
      set({ isLoading: true, isError: false, errorMsg: "" });

      // 1. Query New Relic
      const results = await runNrql(nrqlQuery);

      // 2. Build limits and transform results into jurneyData
      const limitsMap = toLimitsMap(touchpointsArray);
      const jurneyData = transformPanelData(results, limitsMap);

      // 3. Build stagesWithPercentage using Option B fallback
      const stagesWithPercentage = buildStagesWithPercentage(stages, jurneyData.data);

      // 4. Save everything
      set({
        rawResults: results,
        jurneyData,
        stagesWithPercentage,
        isLoading: false,
        isError: false,
        errorMsg: ""
      });
    } catch (err) {
      set({
        isLoading: false,
        isError: true,
        errorMsg: String(err)
      });
    }
  },

  getContextForAI: () => {
    const { jurneyData, stagesWithPercentage, rawResults, selectedItem } = get();

    return {
      jurneyData,
      stagesWithPercentage,
      rawResults,
      selectedStage: selectedItem
    };
  }
}));
