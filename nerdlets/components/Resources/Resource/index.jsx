// Librarys
import PropTypes from "prop-types";

// Components
import KPI from "./KPI";
import RiskMeter from "./RiskMeter";
import AnswersEngine from "./AnswersEngine";

export default function Resource({
  unit,
  title,
  total,
  status,
  riskMeter,
  answersEngine,
}) {
  return (
    <article className="resource py-4 d-flex flex-column">
      <h6 className="title mb-3 text-center text-uppercase fw-bold">{title}</h6>

      <KPI unit={unit} total={total} status={status} />
      <RiskMeter {...riskMeter} />
      <AnswersEngine answers={answersEngine} />
    </article>
  );
}

Resource.propTypes = {
  total: PropTypes.number.isRequired,
  riskMeter: PropTypes.object.isRequired,

  unit: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,

  answersEngine: PropTypes.arrayOf(PropTypes.object),
};
