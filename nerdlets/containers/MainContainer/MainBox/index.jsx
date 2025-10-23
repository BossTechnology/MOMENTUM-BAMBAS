// Components
// import Loader from "../../../components/Loader";
import Journey from "../../../components/Journey";
import BusinessObjectives from "../../../components/BusinessObjectives";

// Hooks
// import useMainBox from "./useMainBox";

export default function MainBox() {
  // const { isLoadingStages } = useMainBox();

  // if (isLoadingStages) {
  //   return <Loader title="Loading application...." />;
  // }

  return (
    <div className="main-box px-2 d-flex flex-column">
      <Journey />
      <BusinessObjectives />
    </div>
  );
}
