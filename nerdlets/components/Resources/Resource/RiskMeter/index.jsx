// Librarys
import PropTypes from "prop-types";
import { memo, useState } from "react";

// Components
import Marker from "./Marker";

// Utils
import generateId from "../../../../utils/generateId";

const rangeId = `risk-meter-range-${generateId()}`;

function RiskMeter({ value = 0, percentage = 0 }) {
  const [rangeValue, setRangeValue] = useState(String(value));

  // Get range value as numeric value
  const rangeNumericValue = Number(rangeValue);

  // Define marker position
  const position = rangeValue === "0" ? 0.2 : rangeValue * 0.98;

  // Define flags
  const isShowingDangerousBar = rangeNumericValue < percentage;

  return (
    <article className="risk-meter-box d-flex flex-column">
      <h6 className="title mb-2 fw-semibold text-uppercase">Risk Meter</h6>

      <div className="box shadow-box">
        <div className="track position-relative">
          <div className="inner">
            <div
              className="dangerous-percentage-box top-0 position-absolute d-flex align-items-center"
              style={{
                left: `calc(${position}% + 3px)`,
                width: `${
                  isShowingDangerousBar ? percentage - rangeNumericValue : 0
                }%`,
              }}
            />

            <div
              style={{ width: `${percentage}%` }}
              className="percentage-box top-0 start-0 position-absolute d-flex align-items-center"
            >
              <span className="percentage fw-medium position-relative">
                {percentage} %
              </span>
            </div>
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
