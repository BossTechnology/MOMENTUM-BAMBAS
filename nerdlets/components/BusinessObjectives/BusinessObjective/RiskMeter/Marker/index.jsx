// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Components
import TriangleIcon from "../../../icons/triangle-icon";

// Utils
import classnames from "../../../../../utils/classnames";

function Marker({ position, isShowingDangerousBar }) {
  return (
    <div
      style={{ left: `${position}%` }}
      onClick={(e) => e.stopPropagation()}
      className={classnames([
        isShowingDangerousBar ? "inside-dangerous-bar" : null,
        "marker-box top-0 position-absolute d-flex flex-column align-items-center",
      ])}
    >
      <div className="line" onClick={(e) => e.stopPropagation()} />
      <TriangleIcon />
    </div>
  );
}

Marker.propTypes = {
  isShowingDangerousBar: PropTypes.bool,
  position: PropTypes.number.isRequired,
};

export default memo(Marker);
