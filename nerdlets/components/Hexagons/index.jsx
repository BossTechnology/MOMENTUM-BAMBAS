// Components
import HexagonList from "./HexagonList";

// Constants
import bigHexagons from "./data/big-hexagons";
import smallHexagons from "./data/small-hexagons";

export default function Hexagons() {
  return (
    <section className="hexagons d-flex flex-column align-items-center justify-content-center">
      <HexagonList hexagons={bigHexagons} className="big-hexagons" />
      <HexagonList hexagons={smallHexagons} className="small-hexagons" />
    </section>
  );
}
