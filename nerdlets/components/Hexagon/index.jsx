// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Components
import Dot from "./Dot";
import Tooltip from "./Tooltip";
import HexagonContent from "./HexagonContent";

// Hooks
import useHexagon from "./useHexagon";

// Utils
import classnames from "../../utils/classnames";
import createValidObject from "../../utils/createValidObject";

function Hexagon({
  icon,
  active,
  tooltip,
  onClick,
  percentage,
  onViewDetails,
}) {
  const {
    pct,
    hideTooltip,
    isShowingTooltip,
    handleViewDetails,
    handleClickHexagon,
  } = useHexagon({
    onClick: onClick,
    percentage: percentage,
    onViewDetails: onViewDetails,
  });

  return (
    <div
      className={classnames([
        active ? "active" : null,
        isShowingTooltip ? "showing-tooltip 1" : null,
        "hexagon-box d-flex align-items-center justify-content-center position-relative",
      ])}
    >
      <div className="hexagon position-relative" style={{ "--pct": pct }}>
        <HexagonContent
          icon={icon}
          percentage={percentage}
          onClick={handleClickHexagon}
        />
      </div>

      <Dot percentage={percentage} />

      {active && isShowingTooltip && (
        <Tooltip
          {...createValidObject(tooltip)}
          onViewDetails={handleViewDetails}
          hide={hideTooltip}
        />
      )}
    </div>
  );
}

Hexagon.propTypes = {
  icon: PropTypes.node,
  active: PropTypes.bool,
  tooltip: PropTypes.object,

  onClick: PropTypes.func,
  onViewDetails: PropTypes.func,

  percentage: PropTypes.number.isRequired,
};

export default memo(Hexagon);
