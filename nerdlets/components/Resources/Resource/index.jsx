// Librarys
import PropTypes from "prop-types";

// Components
import KPI from "./KPI";
import RiskMeter from "./RiskMeter";
import AnswersEngine from "./AnswersEngine";

export default function Resource({
  kpi,
  unit,
  title,
  riskMeter,
  onClickKpi,
  answersEngine,
}) {
  return (
    <article className="resource py-4 d-flex flex-column">
      <h6 className="title mb-3 text-center text-uppercase fw-bold">{title}</h6>

      <KPI
        {...kpi}
        unit={unit}
        onClick={onClickKpi}
        titlePopup="Click for see more information about this section...."
      />

      <RiskMeter {...riskMeter} />
      <AnswersEngine answers={answersEngine} />
    </article>
  );
}

Resource.propTypes = {
  unit: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClickKpi: PropTypes.func.isRequired,

  kpi: PropTypes.object.isRequired,
  riskMeter: PropTypes.object.isRequired,
  answersEngine: PropTypes.arrayOf(PropTypes.object),
};
