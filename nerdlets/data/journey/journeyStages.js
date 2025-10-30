import generateId from "../../utils/generateId";
import { BIG_STAGE, SMALL_STAGE } from "./stage-sizes";

import { ICON_COMPONENTS } from "../../data/journey/stages/icons/index";

const ROW1_SIZE = BIG_STAGE;
const ROW2_SIZE = SMALL_STAGE;

// Visible columns each row
const ROW1_COLS = 11;
const ROW2_COLS = 10;

export function journeyStages(stagesInput) {
  // 1. Separate rows
  let row1 = stagesInput.filter((s) => s.stageRow === 1);
  let row2 = stagesInput.filter((s) => s.stageRow === 2);

  // 2. Deduplicate per row/position.
  const dedupeByRowPos = (arr) => {
    const seen = new Set();
    return arr.filter((s) => {
      const key = `${s.stageRow}-${s.stagePosition}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  };

  row1 = dedupeByRowPos(row1);
  row2 = dedupeByRowPos(row2);

  // 3. Sort each row by stagePosition ascending
  row1.sort((a, b) => a.stagePosition - b.stagePosition);
  row2.sort((a, b) => a.stagePosition - b.stagePosition);

  // 4. row1 has positions 1..ROW1_COLS.
  function fillMissing(rowArr, totalCols, rowNumber) {
    const mapByPos = new Map();
    rowArr.forEach((s) => mapByPos.set(s.stagePosition, s));

    const full = [];
    for (let pos = 1; pos <= totalCols; pos += 1) {
      if (mapByPos.has(pos)) {
        full.push(mapByPos.get(pos));
      } else {
        full.push({
          ai: false,
          active: false,
          stageRow: rowNumber,
          stagePosition: pos,
          iconName: "",
          name: "",
          idStage: ""
        });
      }
    }
    return full;
  }

  row1 = fillMissing(row1, ROW1_COLS, 1);
  row2 = fillMissing(row2, ROW2_COLS, 2);

  // 5. Normalize each stage
  function normalizeRow(rowArr, sizeConst) {
    return rowArr.map((stage) => {
      const IconComponent = ICON_COMPONENTS[stage.iconName] || null;

      return {
        _id: generateId(),
        size: sizeConst,
        active: !!stage.active,
        ai: !!stage.ai,
        label: stage.name || "",
        icon: IconComponent || null,
        stageRow: stage.stageRow,
        stagePosition: stage.stagePosition,
        percentage: stage.percentage || 0
      };
    });
  }

  const row1Stages = normalizeRow(row1, ROW1_SIZE);
  const row2Stages = normalizeRow(row2, ROW2_SIZE);

  // 6. Return same structure your Journey component
  return [
    {
      _id: generateId(),
      className: "big-stage",
      stages: row1Stages
    },
    {
      _id: generateId(),
      className: "small-stage",
      stages: row2Stages
    }
  ];
}
