// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Utils
import classnames from "../../utils/classnames";
import isFunction from "../../utils/isFunction";

function TouchpointQuery({ query, onClick, titlePopup, truncate = true }) {
  return (
    <div
      onClick={onClick}
      title={titlePopup}
      role={isFunction(onClick) ? "button" : undefined}
      className={classnames([
        truncate ? "text-truncate" : null,
        "touchpoint-query text-center py-1",
      ])}
    >
      <span className="fw-medium">{query}</span>
    </div>
  );
}

TouchpointQuery.propTypes = {
  truncate: PropTypes.bool,
  titlePopup: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default memo(TouchpointQuery);
