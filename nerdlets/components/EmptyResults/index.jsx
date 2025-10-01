// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

function EmptyResults({ message }) {
  return (
    <div className="empty-results px-4 d-flex align-items-center justify-content-center">
      <p className="message mb-0 text-center mx-auto fw-medium">{message}</p>
    </div>
  );
}

EmptyResults.propTypes = {
  message: PropTypes.string.isRequired,
};

export default memo(EmptyResults);
