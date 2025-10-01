// Components
import Chat from "../../Chat";
import QueryView from "./QueryView";
import TopContent from "./TopContent";
import CommentForm from "../../CommentForm";
import TouchpointsTable from "../../TouchpointsTable";

// Hooks
import useContent from "./useContent";

// Utils
import classnames from "../../../utils/classnames";

export default function TouchpointsModalContent() {
  const { views, aiChat, selectedStage, selectedHexagon } = useContent();

  return (
    <div className="main-content d-flex flex-column align-items-between">
      <TopContent selectedHexagon={selectedHexagon} />

      <div
        ref={aiChat.scrollbarRef}
        className={classnames([
          views.currentView,
          "scrollbar-box little-scrollbar overflow-y-auto",
        ])}
      >
        <TouchpointsTable
          onClickQuery={views.showQueryView}
          touchpoints={selectedStage?.fuel?.touchpoints}
        />

        <div className={!views.isShowingChatView ? "d-none" : undefined}>
          <Chat messages={aiChat.messages} />
        </div>
      </div>

      <div className={!views.isShowingChatView ? "d-none" : undefined}>
        <CommentForm onSubmit={aiChat.addNewUserMessage} />
      </div>

      {views.isShowingQueryView && (
        <QueryView onBack={views.showChatView} query={views.viewData?.query} />
      )}
    </div>
  );
}
