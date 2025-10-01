// Constants
import load from "./data/load/stage";
import haul from "./data/haul/stage";
import idle from "./data/idle/stage";
import returnStage from "./data/return/stage";
import dump from "./data/dump/stage";
import maintenance from "./data/maintenance/stage";
import drill from "./data/drill/stage";
import stage from "./data/stage.json";

export const LOAD = "load"; // 1° stage
export const HAUL = "haul"; // 2° stage
export const IDLE = "idle"; // 3° stage
export const RETURN = "return"; // 4° stage
export const DUMP = "dump"; // 5° stage
export const MAINTENANCE = "maintenance"; // 6° stage
export const DRILL = "drill"; // 7° stage

export const DEFAULT_STAGE = {
  fuel: stage,
  tires: stage,
  production: stage,
};

export const stages = {
  [LOAD]: load,
  [HAUL]: haul,
  [IDLE]: idle,
  [RETURN]: returnStage,
  [DUMP]: dump,
  [MAINTENANCE]: maintenance,
  [DRILL]: drill,
};
