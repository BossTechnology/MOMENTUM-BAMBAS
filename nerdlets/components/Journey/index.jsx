import StageList from "./StageList";
import TouchpointsModal from "../TouchpointsModal";
import { journeyStages } from "../../data/journey/journeyStages";
import { useDataStore } from "../../data/Store/useDataStore";
import createValidArray from "../../utils/createValidArray";

export default function Journey() {
  const { stagesWithPercentage, isModalOpen, openModal, closeModal } = useDataStore();

  const journey = journeyStages(stagesWithPercentage);

  return (
    <section className="journey d-flex flex-column align-items-center justify-content-center">
      {isModalOpen && <TouchpointsModal isShowing={isModalOpen} onHide={closeModal} />}

      {createValidArray(journey).map((item, i) => (
        <StageList
          stages={item?.stages}
          className={item?.className}
          onViewDetails={openModal} // <- sets isModalOpen + selectedItem in the store
          key={`stage-list-${i}-${item?._id}`}
        />
      ))}
    </section>
  );
}
