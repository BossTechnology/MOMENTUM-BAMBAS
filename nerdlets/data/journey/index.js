// Utils
import generateId from "../../utils/generateId";

// Constants
import dumpStage from "./stages/dump-stage";
import idleStage from "./stages/idle-stage";
import haulStage from "./stages/haul-stage";
import loadStage from "./stages/load-stage";
import drillStage from "./stages/drill-stage";
import returnStage from "./stages/return-stage";
import maintenanceStage from "./stages/maintenance-stage";
import { BIG_STAGE, SMALL_STAGE } from "./stage-sizes";

const journey = [
  // Stages of the first row
  {
    className: "big-stage", // Opcional, añade una clase al elemento del listado de stages

    stages: [
      { active: false }, // Stage desactivada, active: false
      { active: false },
      { active: false }, // aqui tambien se le puede pasar 'icon' para que muestre un icono cuando la stage este desactivada

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
      _id: generateId(),
      size: BIG_STAGE,
    })),
  },

  // Stages of the second row
  {
    className: "small-stage",

    stages: [
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
      _id: generateId(),
      size: SMALL_STAGE,
    })),
  },
].map((item) => ({ ...item, _id: generateId() })); // Genera un ID para cada lista de stages (Lista de hexagonos grandes y pequeñas)

export default journey;
