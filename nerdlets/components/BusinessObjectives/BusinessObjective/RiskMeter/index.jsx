// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Components
import Marker from "./Marker";
import DangerousBar from "./DangerousBar";
import PercentageBar from "./PercentageBar";

// Hooks
import useRiskMeter from "./useRiskMeter";

// Utils
import generateId from "../../../../utils/generateId";

const rangeId = `risk-meter-range-${generateId()}`;

function RiskMeter({ value = 0, percentage = 0 }) {
  const {
    position,
    rangeValue,
    setRangeValue,
    rangeNumericValue,
    isShowingDangerousBar,
  } = useRiskMeter({ value, percentage });

  return (
    <article className="risk-meter-box d-flex flex-column">
      <h6 className="title mb-2 fw-semibold text-uppercase">Risk Meter</h6>

      <div className="box shadow-box">
        <div className="track position-relative">
          <div className="inner">
            <PercentageBar percentage={percentage} />

            <DangerousBar
              position={position}
              percentage={percentage}
              isShowing={isShowingDangerousBar}
              rangeNumericValue={rangeNumericValue}
            />
          </div>

          <input
            min={0}
            max={100}
            type="range"
            id={rangeId}
            value={rangeValue}
            className="range position-absolute opacity-0"
            onChange={(e) => setRangeValue(e.target.value)}
          />

          <Marker
            position={position}
            isShowingDangerousBar={isShowingDangerousBar}
          />
        </div>
      </div>
    </article>
  );
}

RiskMeter.propTypes = {
  value: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default memo(RiskMeter);
