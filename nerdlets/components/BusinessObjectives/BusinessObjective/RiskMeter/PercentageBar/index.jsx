// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

function PercentageBar({ percentage }) {
  return (
    <div
      style={{ width: `${percentage}%` }}
      className="percentage-box top-0 start-0 position-absolute d-flex align-items-center"
    >
      <span className="percentage fw-medium position-relative">
        {percentage} %
      </span>
    </div>
  );
}

PercentageBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default memo(PercentageBar);
