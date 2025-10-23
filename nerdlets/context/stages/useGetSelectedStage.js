// Hooks
import useStages from "./useStages";

/**
 * Hook for get selected stage
 */
export default function useGetSelectedStage() {
  const selectedStage = useStages((state) => state.selectedStage);
  return selectedStage;
}
