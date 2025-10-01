// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Components
import TouchpointQuery from "../../../TouchpointQuery";
import TouchpointStatus from "../../../TouchpointStatus";

// Utils
import createValidString from "../../../../utils/createValidString";

function TableResult({ item, onClickQuery }) {
  return (
    <li className="table-result-item d-flex align-items-center">
      <div className="touchpoint-field py-2 px-3">
        <span>{createValidString(item?.name, "-------")}</span>
      </div>

      <div className="adn-field p-2 text-center">
        <span>{createValidString(item?.adn, "-------")}</span>
      </div>

      <div className="weight-field p-2 text-center text-uppercase">
        <span>{createValidString(item?.weight, "-------")}</span>
      </div>

      <div className="query-field py-2 px-3">
        <TouchpointQuery
          query={item?.query}
          onClick={onClickQuery}
          titlePopup={onClickQuery ? "Click to show the full query" : undefined}
        />
      </div>

      <div className="status-field py-2 d-flex align-items-center justify-content-center">
        <TouchpointStatus status={item?.status} />
      </div>
    </li>
  );
}

TableResult.propTypes = {
  item: PropTypes.object.isRequired,
  onClickQuery: PropTypes.func.isRequired,
};

export default memo(TableResult);
