// Hooks
import useViews from "./hooks/useViews";
import useAiChat from "../../../hooks/useAiChat";
import useGetSelectedStage from "../../../storage/stages/useGetSelectedStage";
import useGetSelectedHexagon from "../../../storage/stages/useGetSelectedHexagon";

/**
 * Hook for implements TouchpointsModalContent component
 */
export default function useContent() {
  const views = useViews();
  const aiChat = useAiChat();
  const selectedStage = useGetSelectedStage();
  const selectedHexagon = useGetSelectedHexagon();

  return {
    views: views,
    aiChat: aiChat,
    selectedStage: selectedStage,
    selectedHexagon: selectedHexagon,
  };
}
