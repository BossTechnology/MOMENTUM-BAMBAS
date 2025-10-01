// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Components
import AlertIcon from "../../../../icons/alert-icon";
import TouchpointActions from "../../../../TouchpointActions";

function TopContent({ isLow, hoursOfLife }) {
  return (
    <div className="top-content d-flex align-items-center justify-content-between column-gap-5 mb-3">
      <div className="box d-flex align-items-center">
        {isLow && <AlertIcon />}

        <h6 className="title mb-0 text-uppercase fw-semibold">Llantas</h6>

        <span className="hours-of-life mb-0 fw-semibold ms-5">
          {hoursOfLife ?? 0} Horas de vida
        </span>
      </div>

      <TouchpointActions />
    </div>
  );
}

TopContent.propTypes = {
  isLow: PropTypes.bool,
  hoursOfLife: PropTypes.number,
};

export default memo(TopContent);
