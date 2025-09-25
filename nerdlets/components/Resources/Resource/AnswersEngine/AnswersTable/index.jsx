// Librarys
import PropTypes from "prop-types";

// Components
import Fields from "./Fields";
import Results from "./Results";

export default function AnswersTable({ answers }) {
  return (
    <div className="answers-table d-flex flex-column">
      <Fields />
      <Results answers={answers} />
    </div>
  );
}

AnswersTable.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object),
};
