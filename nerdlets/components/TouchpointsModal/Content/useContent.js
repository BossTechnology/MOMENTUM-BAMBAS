import useViews from "./hooks/useViews";
import useAiChat from "../../../hooks/useAiChat";
import useGetSelectedStage from "../../../context/stages/useGetSelectedStage";

export default function useContent() {
  const views = useViews();
  const selectedStage = useGetSelectedStage();

  return {
    views,
    selectedStage
  };
}
