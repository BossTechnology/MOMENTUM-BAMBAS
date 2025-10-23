// Hooks
import { useCallback } from "react";
import useStages from "../../../context/stages/useStages";

/**
 * Hook for implements logic StageList component
 */
export default function useStageList() {
  const selectStage = useStages((state) => state.selectStage);

  // Click event in stage
  const handleClickStage = useCallback((stage) => {
    // Check if stage is active
    if (!stage?.active) return;

    selectStage(stage);
  }, []);

  return {
    handleClickStage: handleClickStage,
  };
}
