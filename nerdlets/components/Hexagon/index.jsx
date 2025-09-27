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

function Hexagon({ icon, active, tooltip, percentage }) {
  const { pct, showTooltip, hideTooltip, isShowingTooltip } = useHexagon({
    percentage: percentage,
  });

  return (
    <div
      className={classnames([
        active ? "active" : null,
        isShowingTooltip ? "showing-tooltip" : null,
        "hexagon-box d-flex align-items-center justify-content-center position-relative",
      ])}
    >
      <div className="hexagon position-relative" style={{ "--pct": pct }}>
        <HexagonContent
          icon={icon}
          percentage={percentage}
          showTooltip={showTooltip}
        />
      </div>

      <Dot />

      {active && isShowingTooltip && (
        <Tooltip {...createValidObject(tooltip)} hide={hideTooltip} />
      )}
    </div>
  );
}

Hexagon.propTypes = {
  icon: PropTypes.node,
  active: PropTypes.bool,
  tooltip: PropTypes.object,
  percentage: PropTypes.number.isRequired,
};

export default memo(Hexagon);
