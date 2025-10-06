// Hooks
import useAiChat from "../../../../hooks/useAiChat";
import useGetSelectedHexagon from "../../../../context/stages/useGetSelectedHexagon";

/**
 * Hook for implements TiresModalContent component
 */
export default function useContent() {
  const aiChat = useAiChat();
  const selectedHexagon = useGetSelectedHexagon();

  return {
    aiChat: aiChat,
    selectedHexagon: selectedHexagon,
  };
}
