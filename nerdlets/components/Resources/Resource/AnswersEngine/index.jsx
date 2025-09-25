// Librarys
import PropTypes from "prop-types";

// Components
import AnswersTable from "./AnswersTable";

export default function AnswersEngine({ answers }) {
  return (
    <article className="answer-engine-box d-flex flex-column">
      <h6 className="title mb-2 fw-semibold text-uppercase">Answer Engine</h6>

      <div className="shadow-box">
        <AnswersTable answers={answers} />
      </div>
    </article>
  );
}

AnswersEngine.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.object),
};
