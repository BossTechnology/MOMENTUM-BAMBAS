// Librarys
import PropTypes from "prop-types";
import { memo, useState } from "react";

// Components
import Button from "../Button";
import Tooltip from "./Tooltip";

// Utils
import classnames from "../../utils/classnames";
import createValidObject from "../../utils/createValidObject";

// Images
import activeHexagon from "./images/active-hexagon.gif";
import inactiveHexagon from "./images/inactive-hexagon.png";

function Hexagon({ icon, active, tooltip }) {
  const [isShowingTooltip, setShowingTooltip] = useState(false);

  return (
    <div
      className={classnames([
        isShowingTooltip ? "showing-tooltip" : null,
        "hexagon d-flex align-items-center justify-content-center position-relative",
      ])}
      style={{
        backgroundImage: `url(${active ? activeHexagon : inactiveHexagon})`,
      }}
    >
      {icon && (
        <Button
          icon={icon}
          onClick={() => setShowingTooltip(true)}
          className="btn-hexagon p-0 bg-transparent"
          titlePopup="Click to see more information...."
        />
      )}

      {active && isShowingTooltip && (
        <Tooltip
          {...createValidObject(tooltip)}
          hide={() => setShowingTooltip(false)}
        />
      )}
    </div>
  );
}

Hexagon.propTypes = {
  icon: PropTypes.node,
  active: PropTypes.bool,
  tooltip: PropTypes.object,
  direction: PropTypes.string,
};

export default memo(Hexagon);
