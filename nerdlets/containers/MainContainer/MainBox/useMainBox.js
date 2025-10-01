// Hooks
import useGetStages from "../../../hooks/useGetStages";

/**
 * Hook for implements logic MainBox component
 */
export default function useMainBox() {
  const stagesData = useGetStages();

  return {
    isLoadingStages: stagesData.isLoading,
  };
}
