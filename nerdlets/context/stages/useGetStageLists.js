// Hooks
import useStages from "./useStages";

/**
 * Hook for get stage lists
 */
export default function useGetStageLists() {
  const stageLists = useStages((state) => state.stageLists);
  return stageLists;
}
