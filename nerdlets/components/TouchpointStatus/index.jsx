// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Utils
import classnames from "../../utils/classnames";

function TouchpointStatus({ status }) {
  return (
    <div
      role="figure"
      className={classnames([status, "touchpoint-status rounded-circle"])}
    />
  );
}

TouchpointStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

export default memo(TouchpointStatus);
