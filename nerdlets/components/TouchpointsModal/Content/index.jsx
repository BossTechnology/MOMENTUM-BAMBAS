import Chat from "../../Chat";
import QueryView from "./QueryView";
import TopContent from "./TopContent";
import CommentForm from "../../CommentForm";
import TouchpointsTable from "../../TouchpointsTable";

import useContent from "./useContent";
import useAiChat from "../../../hooks/useAiChat";

import classnames from "../../../utils/classnames";
import buildTouchpointRows from "../../../data/tools/buildTouchpointRows";

import { useDataStore } from "../../../data/Store/useDataStore";

export default function TouchpointsModalContent() {
  const { views, selectedStage } = useContent();

  // pull rawResults from the store
  const rawResults = useDataStore((s) => s.rawResults);

  // now build table rows using stage + rawResults
  const touchpointsData = buildTouchpointRows(selectedStage, rawResults);

  // build AI chat with context that includes those rows
  const aiChat = useAiChat(selectedStage, touchpointsData);

  return (
    <div className="main-content d-flex flex-column align-items-between">
      <TopContent selectedStage={selectedStage} />

      <div
        ref={aiChat.scrollbarRef}
        className={classnames([
          views.currentView,
          "scrollbar-box little-scrollbar overflow-y-auto"
        ])}
      >
        <TouchpointsTable touchpoints={touchpointsData} onClickQuery={views.showQueryView} />

        <div className={!views.isShowingChatView ? "d-none" : undefined}>
          <Chat messages={aiChat.messages} />
        </div>
      </div>

      <div className={!views.isShowingChatView ? "d-none" : undefined}>
        <CommentForm onSubmit={aiChat.addNewUserMessage} />
      </div>

      {views.isShowingQueryView && (
        <QueryView onBack={views.showQueryView} query={views.viewData?.query} />
      )}
    </div>
  );
}
