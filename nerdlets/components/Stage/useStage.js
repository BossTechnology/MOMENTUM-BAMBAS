import { useState, useEffect, useCallback } from "react";
import { useDataStore } from "../../data/Store/useDataStore";
import isFunction from "../../utils/isFunction";
import isValidNumber from "../../utils/isValidNumber";

const DELAY = 300;

export default function useStage({ stageData, onClick, onViewDetails }) {
  const { ai, percentage } = stageData || {};

  const [pct, setPct] = useState(0);
  const [isShowingTooltip, setShowingTooltip] = useState(false);

  // grab cached AI for this stage
  const getStageAiAnswer = useDataStore((s) => s.getStageAiAnswer);
  const cachedAi = getStageAiAnswer(stageData) || {};
  const tooltipTitle =
    cachedAi.title ||
    stageData?.tooltip?.title ||
    stageData?.label ||
    stageData?.name ||
    stageData?.idStage ||
    "";
  const tooltipMessage = cachedAi.answer || "Analizando..."; // fallback text while we don't have AI yet

  const hideTooltip = useCallback(() => setShowingTooltip(false), []);

  const handleClickStage = useCallback(() => {
    if (ai) {
      setShowingTooltip(true);

      if (isFunction(onClick)) {
        onClick();
      }
      return;
    }

    if (isFunction(onViewDetails)) {
      onViewDetails();
    }
  }, [ai, onClick, onViewDetails]);

  const handleViewDetails = useCallback(() => {
    hideTooltip();

    if (!isFunction(onViewDetails)) return;
    onViewDetails();
  }, [onViewDetails, hideTooltip]);

  useEffect(() => {
    let mounted = true;

    if (mounted && isValidNumber(percentage)) {
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
    pct,
    isShowingTooltip,
    hideTooltip,
    handleViewDetails,
    handleClickStage,
    tooltipTitle,
    tooltipMessage
  };
}
