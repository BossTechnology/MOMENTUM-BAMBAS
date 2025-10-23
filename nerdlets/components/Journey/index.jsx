// Components
import StageList from "./StageList";
import TouchpointsModal from "../TouchpointsModal";

// Hooks
// import useStages from "./useStages";
import useShowModal from "../../hooks/useShowModal";

// Utils
import createValidArray from "../../utils/createValidArray";

// Constants
import journey from "../../data/journey";

export default function Journey() {
  const touchpointsModal = useShowModal();
  // const { stageLists, touchpointsModal } = useStages();

  return (
    <section className="journey d-flex flex-column align-items-center justify-content-center">
      {touchpointsModal.isShowing && (
        <TouchpointsModal isShowing onHide={touchpointsModal.hide} />
      )}

      {createValidArray(journey).map((item, i) => (
        <StageList
          stages={item?.stages}
          className={item?.className}
          onViewDetails={touchpointsModal.show}
          key={`stage-list-${i}-${item?._id}`}
        />
      ))}
    </section>
  );
}
