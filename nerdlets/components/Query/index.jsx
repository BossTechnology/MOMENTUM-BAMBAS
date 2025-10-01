// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

function Query({ query }) {
  return (
    <div className="query-box">
      <span className="query">{query}</span>
    </div>
  );
}

Query.propTypes = {
  query: PropTypes.string,
};

export default memo(Query);
