// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Utils
import classnames from "../../../../utils/classnames";
import isFunction from "../../../../utils/isFunction";
import isValidNumber from "../../../../utils/isValidNumber";

// Constants
import ArrowIcon from "../../icons/arrow-icon";

function KPI({ unit, total, status, onClick, titlePopup }) {
  // Check if has total
  const hasTotal = isValidNumber(total);

  return (
    <div
      onClick={onClick}
      title={titlePopup}
      role={isFunction(onClick) ? "button" : undefined}
      className={classnames([
        status,
        "kpi-box shadow-box d-flex align-items-center px-3 colum-gap-3",
      ])}
    >
      <span className="total w-100 fw-bold d-block text-center">
        {hasTotal ? total : 0}
      </span>

      <div className="unit-box d-flex align-items-center">
        {status && <ArrowIcon />}
        <span className="unit fw-light">{unit}</span>
      </div>
    </div>
  );
}

KPI.propTypes = {
  total: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,

  unit: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  titlePopup: PropTypes.string.isRequired,
};

export default memo(KPI);
