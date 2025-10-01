// Librarys
import PropTypes from "prop-types";

// Components
import Fields from "./Fields";
import Results from "./Results";
import EmptyResults from "../../../../EmptyResults";

// Utils
import isValidArray from "../../../../../utils/isValidArray";

export default function AnswersTable({ answers }) {
  // Check if has answers
  const hasAnswers = isValidArray(answers);

  return (
    <div className="answers-table d-flex flex-column">
      <Fields />

      {hasAnswers && <Results answers={answers} />}

      {!hasAnswers && (
        <EmptyResults message="Results are unavailable because there is insufficient data for this view." />
      )}
    </div>
  );
}

AnswersTable.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object),
};
