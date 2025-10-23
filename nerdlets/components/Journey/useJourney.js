// Hooks
import useShowModal from "../../hooks/useShowModal";
import useGetStageLists from "../../context/stages/useGetStageLists";

/**
 * Hook for implements logic Journey component
 */
export default function useJourney() {
  const touchpointsModal = useShowModal();
  const stageLists = useGetStageLists();

  return {
    stageLists: stageLists,
    touchpointsModal: touchpointsModal,
  };
}
