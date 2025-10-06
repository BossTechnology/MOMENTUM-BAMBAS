// Hooks
import useShowModal from "../../hooks/useShowModal";
import useGetSelectedHexagon from "../../context/stages/useGetSelectedHexagon";

/**
 * Hook for implements logic Resources component
 */
export default function useResources() {
  const fuelModal = useShowModal();
  const tiresModal = useShowModal();
  const selectedHexagon = useGetSelectedHexagon();

  return {
    fuelModal: fuelModal,
    tiresModal: tiresModal,
    selectedHexagon: selectedHexagon,
  };
}
