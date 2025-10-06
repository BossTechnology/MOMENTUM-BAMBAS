// Utils
import generateId from "../../../utils/generateId";

// Constants
import dumpStage from "./dump-stage";
import idleStage from "./idle-stage";
import haulStage from "./haul-stage";
import loadStage from "./load-stage";
import drillStage from "./drill-stage";
import returnStage from "./return-stage";
import maintenanceStage from "./maintenance-stage";
import { BIG_HEXAGON, SMALL_HEXAGON, DEFAULT_HEXAGON_CONTEXT } from "./hexagon";

const hexagonLists = [
  // Hexagons of the first row
  {
    className: "big-hexagons",

    hexagons: [
      { active: false },
      { active: false },
      { active: false },

      loadStage, // 1° stage of first row
      haulStage, // 2° stage of first row
      idleStage, // 3° stage of first row
      returnStage, // 4° stage of first row
      dumpStage, // 5° stage of first row

      { active: false },
      { active: false },
      { active: false },
    ].map((item) => ({
      ...item,
      percentage: 0,
      _id: generateId(),
      size: BIG_HEXAGON,
      context: DEFAULT_HEXAGON_CONTEXT,
    })),
  },

  // Hexagons of the second row
  {
    className: "small-hexagons",

    hexagons: [
      { active: false },
      { active: false },
      { active: false },

      maintenanceStage, // 1° stage of second row

      { active: false },
      { active: false },

      drillStage, // 2° stage of second row

      { active: false },
      { active: false },
      { active: false },
    ].map((item) => ({
      ...item,
      percentage: 0,
      _id: generateId(),
      size: SMALL_HEXAGON,
      context: DEFAULT_HEXAGON_CONTEXT,
    })),
  },
].map((item) => ({ ...item, _id: generateId() }));

export default hexagonLists;
