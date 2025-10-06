// Hooks
import useShowModal from "../../hooks/useShowModal";
import useGetHexagonLists from "../../context/stages/useGetHexagonLists";

/**
 * Hook for implements logic Hexagons component
 */
export default function useHexagons() {
  const touchpointsModal = useShowModal();
  const hexagonLists = useGetHexagonLists();

  return {
    hexagonLists: hexagonLists,
    touchpointsModal: touchpointsModal,
  };
}
