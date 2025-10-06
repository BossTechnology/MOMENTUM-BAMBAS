// Components
import HexagonList from "./HexagonList";
import TouchpointsModal from "../TouchpointsModal";

// Hooks
import useHexagons from "./useHexagons";

// Utils
import createValidArray from "../../utils/createValidArray";

export default function Hexagons() {
  const { hexagonLists, touchpointsModal } = useHexagons();

  return (
    <section className="hexagons d-flex flex-column align-items-center justify-content-center">
      {touchpointsModal.isShowing && (
        <TouchpointsModal isShowing onHide={touchpointsModal.hide} />
      )}

      {createValidArray(hexagonLists).map((item, i) => (
        <HexagonList
          hexagons={item?.hexagons}
          className={item?.className}
          onViewDetails={touchpointsModal.show}
          key={`hexagon-list-${i}-${item?._id}`}
        />
      ))}
    </section>
  );
}
