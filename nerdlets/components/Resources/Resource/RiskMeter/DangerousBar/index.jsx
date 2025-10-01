// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

function DangerousBar({ position, isShowing, percentage, rangeNumericValue }) {
  return (
    <div
      className="dangerous-percentage-box top-0 position-absolute d-flex align-items-center"
      style={{
        left: `calc(${position}% + ${percentage <= 97 ? 3 : 0}px)`,
        width: `${isShowing ? percentage - rangeNumericValue : 0}%`,
      }}
    />
  );
}

DangerousBar.propTypes = {
  isShowing: PropTypes.bool,
  position: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  rangeNumericValue: PropTypes.number.isRequired,
};

export default memo(DangerousBar);
