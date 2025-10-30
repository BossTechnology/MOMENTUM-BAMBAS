// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Components
import Dot from "./Dot";
import Tooltip from "./Tooltip";
import StageContent from "./StageContent";

// Hooks
import useStage from "./useStage";

// Utils
import classnames from "../../utils/classnames";

function Stage(stageProps) {
  const { ai, icon, name, active, percentage, onClick, onViewDetails } = stageProps;

  const {
    pct,
    hideTooltip,
    isShowingTooltip,
    handleViewDetails,
    handleClickStage,
    tooltipTitle,
    tooltipMessage
  } = useStage({
    stageData: stageProps,
    onClick: onClick,
    onViewDetails: onViewDetails
  });

  return (
    <div
      className={classnames([
        active ? "active" : null,
        isShowingTooltip ? "showing-tooltip 1" : null,
        "stage-box d-flex align-items-center justify-content-center position-relative"
      ])}
    >
      <div className="stage position-relative" style={{ "--pct": pct }}>
        <StageContent icon={icon} percentage={percentage} onClick={handleClickStage} />
      </div>

      <Dot active={active} percentage={percentage} />

      {active && isShowingTooltip && (
        <Tooltip
          title={tooltipTitle}
          message={tooltipMessage}
          onViewDetails={handleViewDetails}
          hide={hideTooltip}
        />
      )}
    </div>
  );
}

Stage.propTypes = {
  icon: PropTypes.node,
  tooltip: PropTypes.object,

  ai: PropTypes.bool,
  active: PropTypes.bool,

  onClick: PropTypes.func,
  onViewDetails: PropTypes.func,

  percentage: PropTypes.number.isRequired
};

export default memo(Stage);
