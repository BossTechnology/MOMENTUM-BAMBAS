// Librarys
import PropTypes from "prop-types";

// Components
import Query from "../../../Query";
import Button from "../../../Button";

export default function QueryView({ query, onBack }) {
  return (
    <div className="query-view-box mt-3 d-flex flex-column">
      <Query query={query} />
      <Button title="Back" onClick={onBack} className="btn-back" />
    </div>
  );
}

QueryView.propTypes = {
  onBack: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
