import { memo } from "react";
import PropTypes from "prop-types";

import TouchpointQuery from "../../../TouchpointQuery";
import TouchpointStatus from "../../../TouchpointStatus";

import createValidString from "../../../../utils/createValidString";

function TableResult({ item, onClickQuery }) {
  // nice fallback formatting for value
  const valueDisplay = item?.value === null || item?.value === undefined ? "—" : item.value;

  return (
    <li className="table-result-item d-flex align-items-center">
      {/* Touchpoint name */}
      <div className="touchpoint-field py-2 px-3">
        <span>{createValidString(item?.name, "-------")}</span>
      </div>

      {/* DNA */}
      <div className="adn-field p-2 text-center">
        <span>{createValidString(item?.dna, "-------")}</span>
      </div>

      {/* Weight */}
      <div className="weight-field p-2 text-center text-uppercase">
        <span>{createValidString(item?.weight, "-------")}</span>
      </div>

      {/* Optional to Show the Current value */}
      {/* <div className="value-field p-2 text-center">
        <span>{valueDisplay}</span>
      </div> */}

      {/* Query */}
      <div className="query-field py-2 px-3">
        <TouchpointQuery
          query={item?.query}
          onClick={onClickQuery}
          titlePopup={onClickQuery ? "Click to show the full query" : undefined}
        />
      </div>

      {/* Status */}
      <div className="status-field py-2 d-flex align-items-center justify-content-center">
        <TouchpointStatus status={item?.status} />
      </div>
    </li>
  );
}

TableResult.propTypes = {
  item: PropTypes.object.isRequired,
  onClickQuery: PropTypes.func.isRequired
};

export default memo(TableResult);
