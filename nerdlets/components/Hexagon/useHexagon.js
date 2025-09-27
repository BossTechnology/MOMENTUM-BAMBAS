// Hooks
import { useState, useEffect } from "react";

// Utils
import isValidNumber from "../../utils/isValidNumber";

const DELAY = 300;

/**
 * Hook for implements logic Hexagon component
 * @param {object} params Params
 */
export default function useHexagon({ percentage }) {
  const [pct, setPct] = useState(0);
  const [isShowingTooltip, setShowingTooltip] = useState(false);

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
    showTooltip: () => setShowingTooltip(true),
    hideTooltip: () => setShowingTooltip(false),
  };
}
