// Components
import Chat from "../../../Chat";
import TopContent from "./TopContent";
import CommentForm from "../../../CommentForm";
import TiresTable from "../../../TiresTable";

// Hooks
import useContent from "./useContent";

export default function TiresModalContent() {
  const { aiChat, selectedStage } = useContent();

  return (
    <div className="main-content d-flex flex-column align-items-between">
      <TopContent
        hoursOfLife={selectedStage?.tires?.hoursOfLife}
        isLow={selectedStage?.tires?.kpi?.status === "low"}
      />

      <div
        ref={aiChat.scrollbarRef}
        className="scrollbar-box little-scrollbar overflow-y-auto"
      >
        <TiresTable touchpoints={selectedStage?.tires?.touchpoints} />
        <Chat messages={aiChat.messages} />
      </div>

      <CommentForm onSubmit={aiChat.addNewUserMessage} />
    </div>
  );
}
