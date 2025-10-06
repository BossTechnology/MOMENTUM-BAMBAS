// Components
import Chat from "../../../Chat";
import TopContent from "./TopContent";
import TiresTable from "../../../TiresTable";
import CommentForm from "../../../CommentForm";

// Hooks
import useContent from "./useContent";

// Utils
import createValidObject from "../../../../utils/createValidObject";

export default function TiresModalContent() {
  const { aiChat, selectedHexagon } = useContent();

  // Get 'tires' context
  const tires = createValidObject(selectedHexagon?.context?.tires);

  return (
    <div className="main-content d-flex flex-column align-items-between">
      <TopContent
        hoursOfLife={tires?.hoursOfLife}
        isLow={tires?.kpi?.status === "low"}
      />

      <div
        ref={aiChat.scrollbarRef}
        className="scrollbar-box little-scrollbar overflow-y-auto"
      >
        <TiresTable touchpoints={tires?.touchpoints} />
        <Chat messages={aiChat.messages} />
      </div>

      <CommentForm onSubmit={aiChat.addNewUserMessage} />
    </div>
  );
}
