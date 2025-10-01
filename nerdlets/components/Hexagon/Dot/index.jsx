// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Utils
import classnames from "../../../utils/classnames";

function Dot({ percentage }) {
  return (
    <div
      className={classnames([
        "dot-box d-grid position-absolute",
        percentage < 10 ? "low-percentage" : null,
      ])}
    >
      <div className="dot"></div>
    </div>
  );
}

Dot.propTypes = {
  percentage: PropTypes.number,
};

export default memo(Dot);
