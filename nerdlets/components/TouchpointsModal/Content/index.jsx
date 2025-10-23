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
import createValidObject from "../../../utils/createValidObject";

export default function TouchpointsModalContent() {
  const { views, aiChat, selectedStage } = useContent();

  // Get context fields
  const fuel = createValidObject(selectedStage?.context?.fuel);

  return (
    <div className="main-content d-flex flex-column align-items-between">
      <TopContent selectedStage={selectedStage} />

      <div
        ref={aiChat.scrollbarRef}
        className={classnames([
          views.currentView,
          "scrollbar-box little-scrollbar overflow-y-auto",
        ])}
      >
        <TouchpointsTable
          touchpoints={fuel?.touchpoints}
          onClickQuery={views.showQueryView}
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
