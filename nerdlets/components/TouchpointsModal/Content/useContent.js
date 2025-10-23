// Hooks
import useViews from "./hooks/useViews";
import useAiChat from "../../../hooks/useAiChat";
import useGetSelectedStage from "../../../context/stages/useGetSelectedStage";

/**
 * Hook for implements TouchpointsModalContent component
 */
export default function useContent() {
  const views = useViews();
  const aiChat = useAiChat();
  const selectedStage = useGetSelectedStage();

  return {
    views: views,
    aiChat: aiChat,
    selectedStage: selectedStage,
  };
}
