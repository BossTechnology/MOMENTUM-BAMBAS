// src/hooks/useAiChat.js
import { useRef, useState, useCallback, useEffect, useMemo } from "react";
import { useDataStore } from "../../data/Store/useDataStore";
import isString from "../../utils/isString";
import { USER_MESSAGE } from "../../components/Comment/constants";

const DELAY = 100;
const AI_API_URL = "https://bambas-be.onrender.com/ai/query";

function stageDisplayName(stage) {
  return stage?.tooltip?.title || stage?.label || stage?.name || stage?.idStage || "esta etapa";
}

// ---- API client: expects strings { context, question } ----
async function askAI({ context, question }) {
  const payload = {
    context: typeof context === "string" ? context : JSON.stringify(context),
    question: `${question}`
  };

  const resp = await fetch(AI_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!resp.ok) throw new Error(`AI service error ${resp.status}`);

  const data = await resp.json(); // { status, response, error, ... }
  if (data?.status === "success") return data.response;
  throw new Error(data?.error || "AI backend error");
}

export default function useAiChat(selectedStage, touchpointsData) {
  const scrollbarRef = useRef(null);

  // store selectors (functions should be stable in zustand, but don’t put them in effect deps)
  const getContextForAI = useDataStore((s) => s.getContextForAI);
  const getStageAiAnswer = useDataStore((s) => s.getStageAiAnswer);
  const setStageAiAnswer = useDataStore((s) => s.setStageAiAnswer);

  // UI state
  const [messages, setMessages] = useState([]);
  const [loadingAI, setLoadingAI] = useState(false);
  const [errorAI, setErrorAI] = useState("");

  // stable key for this stage
  const stageKey = useMemo(
    () => selectedStage?.idStage || selectedStage?.label || selectedStage?.name || "",
    [selectedStage]
  );

  // dedupe guard
  const inFlightRef = useRef(false);
  const lastAskedKeyRef = useRef("");

  const scrollToEndChat = useCallback(() => {
    const t = setTimeout(() => {
      if (scrollbarRef.current) {
        scrollbarRef.current.scrollTop = scrollbarRef.current.scrollHeight;
      }
      clearTimeout(t);
    }, DELAY);
  }, []);

  const pushMessage = useCallback(
    (msgObj) => {
      setMessages((prev) => [...prev, msgObj]);
      const t = setTimeout(() => {
        scrollToEndChat();
        clearTimeout(t);
      }, 0);
    },
    [scrollToEndChat]
  );

  const buildStageQuestion = useCallback((stage) => {
    const name = stageDisplayName(stage);
    return `Analiza la etapa "${name}" y explica qué está pasando y qué debo hacer.
Incluye salud operacional, riesgos y acciones inmediatas.`;
  }, []);

  const buildFullContextForAI = useCallback(() => {
    const globalContext = getContextForAI(); // jurneyData, stagesWithPercentage, etc.
    return {
      ...globalContext,
      stageSummary: {
        // idStage: stageKey || undefined,
        displayName: stageDisplayName(selectedStage)
        // percentage: selectedStage?.percentage ?? null
      }
      // touchpointsView: Array.isArray(touchpointsData)
      //   ? touchpointsData.map((row) => ({
      //       metric: row.id,
      //       value: row.value,
      //       lower: row.lower,
      //       upper: row.upper,
      //       status: row.status
      //     }))
      //   : []
    };
  }, [getContextForAI, selectedStage, touchpointsData, stageKey]);

  // ---- EFFECT: fires when the selected STAGE changes (not every render) ----
  useEffect(() => {
    if (!stageKey) return;

    // prevent duplicate runs for the same stage while a request is in-flight
    if (inFlightRef.current && lastAskedKeyRef.current === stageKey) return;

    setMessages([]);
    setErrorAI("");

    // 1) try cache by stageKey
    const cached = getStageAiAnswer(stageKey);
    if (cached && isString(cached)) {
      setMessages([{ type: "assistant", message: cached }]);
      setLoadingAI(false);
      return;
    }

    // 2) no cache → call backend once
    const name = stageDisplayName(selectedStage);
    setMessages([{ type: "assistant", message: `Analizando ${name}...` }]);

    let alive = true;
    inFlightRef.current = true;
    lastAskedKeyRef.current = stageKey;
    setLoadingAI(true);

    (async () => {
      try {
        const contextBundle = buildFullContextForAI();
        const question = buildStageQuestion(selectedStage);

        const aiReply = await askAI({ context: contextBundle, question });
        if (!alive) return;

        setStageAiAnswer(stageKey, aiReply); // cache
        setMessages([{ type: "assistant", message: aiReply }]);
        setLoadingAI(false);
      } catch (err) {
        if (!alive) return;
        setErrorAI(String(err));
        setLoadingAI(false);
      } finally {
        inFlightRef.current = false;
      }
    })();

    return () => {
      alive = false;
    };
    // 👇 only depend on stageKey (and the selectedStage for the label)
    // other functions/objects are used inside but shouldn’t retrigger the effect constantly
  }, [
    stageKey,
    selectedStage,
    getStageAiAnswer,
    setStageAiAnswer,
    buildFullContextForAI,
    buildStageQuestion
  ]);

  // user follow-ups
  const addNewUserMessage = useCallback(
    async (newMessage) => {
      if (!newMessage || !isString(newMessage) || !newMessage.trim()) return;

      pushMessage({ type: USER_MESSAGE, message: newMessage });
      setLoadingAI(true);
      setErrorAI("");

      try {
        const contextBundle = buildFullContextForAI();
        const aiReply = await askAI({ context: contextBundle, question: newMessage });

        pushMessage({ type: "assistant", message: aiReply });
        if (stageKey) setStageAiAnswer(stageKey, aiReply);
      } catch (err) {
        setErrorAI(String(err));
      } finally {
        setLoadingAI(false);
      }
    },
    [pushMessage, buildFullContextForAI, stageKey, setStageAiAnswer]
  );

  return { messages, scrollbarRef, addNewUserMessage, loadingAI, errorAI };
}
