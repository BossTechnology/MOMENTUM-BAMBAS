// Hooks
import useStages from "./useStages";

/**
 * Hook for get hexagon lists
 */
export default function useGetHexagonLists() {
  const hexagonLists = useStages((state) => state.hexagonLists);
  return hexagonLists;
}
