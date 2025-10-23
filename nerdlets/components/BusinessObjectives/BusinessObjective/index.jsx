// Librarys
import PropTypes from "prop-types";

// Components
import RiskMeter from "./RiskMeter";
import AnswersEngine from "./AnswersEngine";
import PerformanceIndicator from "./PerformanceIndicator";

export default function BusinessObjective({
  performanceIndicator,
  unit,
  title,
  riskMeter,
  onClickPerformanceIndicator,
  answersEngine,
}) {
  return (
    <article className="business-objective py-4 d-flex flex-column">
      <h6 className="title mb-3 text-center text-uppercase fw-bold">{title}</h6>

      <PerformanceIndicator
        {...performanceIndicator}
        unit={unit}
        onClick={onClickPerformanceIndicator}
        titlePopup="Click for see more information about this section...."
      />

      <RiskMeter {...riskMeter} />
      <AnswersEngine answers={answersEngine} />
    </article>
  );
}

BusinessObjective.propTypes = {
  unit: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClickPerformanceIndicator: PropTypes.func.isRequired,

  riskMeter: PropTypes.object.isRequired,
  performanceIndicator: PropTypes.object.isRequired,
  answersEngine: PropTypes.arrayOf(PropTypes.object),
};
