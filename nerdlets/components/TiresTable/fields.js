// Utils
import genearteId from "../../utils/generateId";

// Constants
export const SORT_STATUS_FIELD = "status";

const fields = [
  {
    name: "Alert",
    className: "alert-field",
  },
  {
    name: "Conditions",
    className: "conditions-field",
  },
  {
    name: "Issues",
    className: "issues-field",
  },
  {
    name: "Indicents",
    className: "incidents-field",
  },
  {
    name: "Anomalies",
    className: "anomalies-field",
  },
  {
    name: "Notify",
    className: "notify-field",
  },
  {
    name: "Status",
    className: "status-field",
    sortField: SORT_STATUS_FIELD,
  },
].map((item) => ({ ...item, _id: genearteId() }));

export default fields;
