// Librarys
import PropTypes from "prop-types";

// Components
import Answer from "./Answer";

export default function AnswersTable({ answers }) {
  return (
    <ul className="answers-result-list d-flex flex-column p-0 m-0">
      {answers.map((answer) => (
        <Answer key={`answer-table-item-${answer?._id}`} data={answer} />
      ))}
    </ul>
  );
}

AnswersTable.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object),
};
