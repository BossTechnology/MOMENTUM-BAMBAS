// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Utils
import classnames from "../../../utils/classnames";

function Dot({ active, percentage }) {
  return (
    <div
      className={classnames([
        "dot-box d-grid position-absolute",
        active && percentage < 10 ? "low-percentage" : null,
      ])}
    >
      <div className="dot"></div>
    </div>
  );
}

Dot.propTypes = {
  active: PropTypes.bool,
  percentage: PropTypes.number,
};

export default memo(Dot);
