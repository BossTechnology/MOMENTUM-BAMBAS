// Hooks
import useAiChat from "../../../../hooks/useAiChat";
import useGetSelectedStage from "../../../../storage/stages/useGetSelectedStage";

/**
 * Hook for implements TiresModalContent component
 */
export default function useContent() {
  const aiChat = useAiChat();
  const selectedStage = useGetSelectedStage();

  return {
    aiChat: aiChat,
    selectedStage: selectedStage,
  };
}
