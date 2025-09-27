// Components
import Header from "../../components/Header";
import Hexagons from "../../components/Hexagons";
import Resources from "../../components/Resources";

export default function MainContainer() {
  return (
    <main className="main-container">
      <Header />

      <div className="main-box px-2 d-flex flex-column">
        <Hexagons />
        <Resources />
      </div>
    </main>
  );
}
