// Hooks
import { useCallback } from "react";
import useStages from "../../../context/stages/useStages";

/**
 * Hook for implements logic HexagonList component
 */
export default function useHexagonList() {
  const selectHexagon = useStages((state) => state.selectHexagon);

  // Click event in hexagon
  const handleClickHexagon = useCallback((hexagon) => {
    // Check if hexagon is active
    if (!hexagon?.active) return;

    selectHexagon(hexagon);
  }, []);

  return {
    handleClickHexagon: handleClickHexagon,
  };
}
