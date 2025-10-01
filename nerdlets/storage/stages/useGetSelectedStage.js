// Hooks
import useStages from "./useStages";

// Utils
import createValidString from "../../utils/createValidString";

// Data
import { DEFAULT_STAGE } from "./constants";

/**
 * Hook for get selected stage
 */
export default function useGetSelectedStage() {
  // Get global data
  const stages = useStages((state) => state.stages);
  const selectedHexagon = useStages((state) => state.selectedHexagon);

  // Get stage id
  const stageId = createValidString(selectedHexagon?.stageId);

  return stages[stageId] ?? DEFAULT_STAGE;
}
