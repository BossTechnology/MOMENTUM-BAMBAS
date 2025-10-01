// Components
import Loader from "../../../components/Loader";
import Hexagons from "../../../components/Hexagons";
import Resources from "../../../components/Resources";

// Hooks
import useMainBox from "./useMainBox";

export default function MainBox() {
  const { isLoadingStages } = useMainBox();

  if (isLoadingStages) {
    return <Loader title="Loading application...." />;
  }

  return (
    <div className="main-box px-2 d-flex flex-column">
      <Hexagons />
      <Resources />
    </div>
  );
}
