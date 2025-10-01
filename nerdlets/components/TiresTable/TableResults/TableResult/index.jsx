// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Components
import NotifyIcons from "./NotifyIcons";
import TouchpointQuery from "../../../TouchpointQuery";
import TouchpointStatus from "../../../TouchpointStatus";

// Utils
import createValidString from "../../../../utils/createValidString";

function TableResult({ item }) {
  return (
    <li className="table-result-item d-flex align-items-center">
      <div className="alert-field py-2 px-3">
        <span>{createValidString(item?.name, "-------")}</span>
      </div>

      <div className="conditions-field py-2 px-3">
        <TouchpointQuery query={item?.conditions} />
      </div>

      <div className="issues-field p-2 text-center">
        <span>{createValidString(String(item?.issues), "-------")}</span>
      </div>

      <div className="incidents-field p-2 text-center text-uppercase">
        <span>{createValidString(String(item?.incidents), "-------")}</span>
      </div>

      <div className="anomalies-field p-2 text-center text-uppercase">
        <span>{createValidString(String(item?.anomalies), "-------")}</span>
      </div>

      <div className="notify-field p-2 d-flex align-items-center justify-content-center">
        <NotifyIcons />
      </div>

      <div className="status-field py-2 d-flex align-items-center justify-content-center">
        <TouchpointStatus status={item?.status} />
      </div>
    </li>
  );
}

TableResult.propTypes = {
  item: PropTypes.object.isRequired,
};

export default memo(TableResult);
