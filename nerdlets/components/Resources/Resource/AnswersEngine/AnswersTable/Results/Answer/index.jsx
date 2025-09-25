// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Components
import ArrowIcon from "../../../../../icons/arrow-icon";

// Utils
import classnames from "../../../../../../../utils/classnames";
import createValidObject from "../../../../../../../utils/createValidObject";

function Answer({ data }) {
  const { value, status, label } = createValidObject(data);

  // Check if is 'low' status
  const isLow = status === "low";

  return (
    <li className="answer-item px-3 d-flex align-items-center position-relative">
      {isLow && (
        <div className="dangerous-bar position-absolute h-100 start-0" />
      )}

      <div className="field-box field-info-box py-2 pe-3">
        <span className="field-info fw-medium">{label}</span>
      </div>

      <div className="field-box field-value-box py-2 ps-3 d-flex align-items-center justify-content-center">
        <span className="field-value fw-light d-block text-center">
          {value}
        </span>

        <div className={classnames(["status-box", status])}>
          <ArrowIcon />
        </div>
      </div>
    </li>
  );
}

Answer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default memo(Answer);
