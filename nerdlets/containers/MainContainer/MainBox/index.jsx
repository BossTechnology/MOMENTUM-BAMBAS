import React, { useEffect } from "react";
// import Loader from "../../../components/Loader";
import Journey from "../../../components/Journey";
import BusinessObjectives from "../../../components/BusinessObjectives";
import { useDataStore } from "../../../data/Store/useDataStore";
import queries from "../../../data/queries";

// Hooks
// import useMainBox from "./useMainBox";

export default function MainBox() {
  const { fetchPanelsData, jurneyData, stagesWithPercentage } = useDataStore();

  useEffect(() => {
    // kick off first fetch when app mounts
    fetchPanelsData(queries.pannelsData);

    // optional: refetch every 60s
    const id = setInterval(() => {
      fetchPanelsData(queries.pannelsData);
    }, 60_000);

    return () => clearInterval(id);
  }, [fetchPanelsData]);

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
