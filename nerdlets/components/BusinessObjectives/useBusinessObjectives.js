// Hooks
import useShowModal from "../../hooks/useShowModal";
import useGetSelectedStage from "../../context/stages/useGetSelectedStage";

/**
 * Hook for implements logic BusinessObjectives component
 */
export default function useBusinessObjectives() {
  const fuelModal = useShowModal();
  const tiresModal = useShowModal();
  const selectedStage = useGetSelectedStage();

  return {
    fuelModal: fuelModal,
    tiresModal: tiresModal,
    selectedStage: selectedStage,
  };
}
