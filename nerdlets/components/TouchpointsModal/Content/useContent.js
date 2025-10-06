// Hooks
import useViews from "./hooks/useViews";
import useAiChat from "../../../hooks/useAiChat";
import useGetSelectedHexagon from "../../../context/stages/useGetSelectedHexagon";

/**
 * Hook for implements TouchpointsModalContent component
 */
export default function useContent() {
  const views = useViews();
  const aiChat = useAiChat();
  const selectedHexagon = useGetSelectedHexagon();

  return {
    views: views,
    aiChat: aiChat,
    selectedHexagon: selectedHexagon,
  };
}
