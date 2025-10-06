// Hooks
import useStages from "./useStages";

/**
 * Hook for get selected hexagon
 */
export default function useGetSelectedHexagon() {
  const selectedHexagon = useStages((state) => state.selectedHexagon);
  return selectedHexagon;
}
