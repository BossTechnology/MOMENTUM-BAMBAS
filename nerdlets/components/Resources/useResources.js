// Hooks
import useShowModal from "../../hooks/useShowModal";
import useGetSelectedStage from "../../storage/stages/useGetSelectedStage";

/**
 * Hook for implements logic Resources component
 */
export default function useResources() {
  const fuelModal = useShowModal();
  const tiresModal = useShowModal();
  const selectedStage = useGetSelectedStage();

  return {
    fuelModal: fuelModal,
    tiresModal: tiresModal,
    selectedStage: selectedStage,
  };
}
