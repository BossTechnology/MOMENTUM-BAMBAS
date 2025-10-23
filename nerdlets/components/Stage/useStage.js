// Hooks
import { useState, useEffect, useCallback } from "react";

// Utils
import isFunction from "../../utils/isFunction";
import isValidNumber from "../../utils/isValidNumber";

const DELAY = 300;

/**
 * Hook for implements logic Stage component
 * @param {object} params Params
 */
export default function useStage({ ai, onClick, percentage, onViewDetails }) {
  const [pct, setPct] = useState(0);
  const [isShowingTooltip, setShowingTooltip] = useState(false);

  // Callback for hide tooltip
  const hideTooltip = useCallback(() => setShowingTooltip(false), []);

  // Click event in stage
  const handleClickStage = useCallback(() => {
    if (ai) {
      setShowingTooltip(true);

      // Validate 'onClick' param
      if (!isFunction(onClick)) return;
      onClick();

      return;
    }

    // Validate 'onViewDetails' param
    if (!isFunction(onViewDetails)) return;
    onViewDetails();
  }, [onClick, onViewDetails]);

  // Click event in stage
  const handleViewDetails = useCallback(() => {
    hideTooltip();

    // Validate 'onViewDetails' param
    if (!isFunction(onViewDetails)) return;
    onViewDetails();
  }, [onViewDetails]);

  // Effect for update stage percentage
  useEffect(() => {
    let mounted = true;

    // Update percentage after short delay
    if (mounted && isValidNumber(percentage)) {
      // Create timeout and save percentage
      const timeout = setTimeout(() => {
        setPct(percentage);
        clearTimeout(timeout);
      }, DELAY);
    }

    return () => {
      mounted = false;
    };
  }, [percentage]);

  return {
    pct: pct,
    isShowingTooltip: isShowingTooltip,

    hideTooltip: hideTooltip,
    handleViewDetails: handleViewDetails,
    handleClickStage: handleClickStage,
  };
}
