// Hooks
import { useMemo, useState, useEffect } from "react";

// Utils
import isValidNumber from "../../../../utils/isValidNumber";

/**
 * Hook for implements logic RiskMeter component
 * @param {object} params Params
 */
export default function useRiskMeter({ value, percentage }) {
  const [rangeValue, setRangeValue] = useState(String(value));

  // Get range value as numeric value
  const rangeNumericValue = Number(rangeValue);

  // Define flags
  const isShowingDangerousBar = rangeNumericValue < percentage;

  // Define marker position
  const position = useMemo(
    () => (rangeValue === "0" ? 0.2 : rangeValue * 0.9875),
    [rangeValue]
  );

  // Effect for update range value
  useEffect(() => {
    let mounted = true;

    const newValue = String(value);

    if (mounted && isValidNumber(value) && newValue !== rangeValue) {
      setRangeValue(newValue);
    }

    return () => {
      mounted = false;
    };
  }, [value]);

  return {
    position: position,
    rangeValue: rangeValue,
    setRangeValue: setRangeValue,
    rangeNumericValue: rangeNumericValue,
    isShowingDangerousBar: isShowingDangerousBar,
  };
}
