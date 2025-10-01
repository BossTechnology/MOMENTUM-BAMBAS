// Hooks
import { useState, useCallback } from "react";

// Utils
import isValidString from "../../../../utils/isValidString";

// Constants
import { CHAT_VIEW, QUERY_VIEW } from "../views";

/**
 * Hook for implements views logic
 */
export default function useViews() {
  const [viewData, setViewData] = useState({});
  const [currentView, setCurrentView] = useState(CHAT_VIEW);

  // Callback for change view
  const showView = useCallback(
    (view, newViewData) => {
      setViewData(newViewData);

      // Validate 'view' param
      if (!isValidString(view) || view === currentView) return;

      setCurrentView(view);
    },
    [currentView]
  );

  return {
    viewData: viewData,
    currentView: currentView,

    isShowingChatView: currentView === CHAT_VIEW,
    isShowingQueryView: currentView === QUERY_VIEW,

    showChatView: (data) => showView(CHAT_VIEW, data),
    showQueryView: (data) => showView(QUERY_VIEW, data),
  };
}
