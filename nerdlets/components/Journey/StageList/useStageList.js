// Hooks
import { useCallback } from "react";
import useStages from "../../../context/stages/useStages";
import { useDataStore } from "../../../data/Store/useDataStore";
/**
 * Hook for implements logic StageList component
 */
export default function useStageList() {
  const selectStage = useStages((state) => state.selectStage);
  const { openModal } = useDataStore();
  // Click event in stage
  const handleClickStage = useCallback((stage) => {
    // Check if stage is active
    if (!stage?.active) return;
    // openModal(stage)
    selectStage(stage);
  }, []);

  // const handleClickStage = useCallback((stage) => {
  //   // Check if stage is active
  //   if (!stage?.active) return;
  //   selectStage(stage);
  // }, []);

  return {
    handleClickStage: handleClickStage
  };
}
