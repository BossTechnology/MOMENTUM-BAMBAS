import useStages from "./useStages";

export default function useGetSelectedStage() {
  const selectedStage = useStages((state) => state.selectedStage);
  return selectedStage;
}
