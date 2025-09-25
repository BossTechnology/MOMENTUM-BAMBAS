// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Constants
import ArrowIcon from "../../icons/arrow-icon";
import classnames from "../../../../utils/classnames";

function KPI({ unit, total, status }) {
  return (
    <div
      className={classnames([
        status,
        "kpi-box shadow-box d-flex align-items-center px-3 colum-gap-3",
      ])}
    >
      <span className="total w-100 fw-bold d-block text-center">{total}</span>

      <div className="unit-box d-flex align-items-center">
        {status && <ArrowIcon />}
        <span className="unit fw-light">{unit}</span>
      </div>
    </div>
  );
}

KPI.propTypes = {
  unit: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default memo(KPI);
