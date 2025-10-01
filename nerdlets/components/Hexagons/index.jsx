// Components
import HexagonList from "./HexagonList";
import TouchpointsModal from "../TouchpointsModal";

// Hooks
import useShowModal from "../../hooks/useShowModal";

// Constants
import bigHexagons from "./data/big-hexagons";
import smallHexagons from "./data/small-hexagons";

export default function Hexagons() {
  const touchpointsModal = useShowModal();

  return (
    <section className="hexagons d-flex flex-column align-items-center justify-content-center">
      <HexagonList
        hexagons={bigHexagons}
        onViewDetails={touchpointsModal.show}
        className="big-hexagons"
      />

      <HexagonList
        hexagons={smallHexagons}
        onViewDetails={touchpointsModal.show}
        className="small-hexagons"
      />

      {touchpointsModal.isShowing && (
        <TouchpointsModal isShowing onHide={touchpointsModal.hide} />
      )}
    </section>
  );
}
