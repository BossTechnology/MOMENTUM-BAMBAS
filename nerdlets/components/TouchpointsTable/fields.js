// Utils
import genearteId from "../../utils/generateId";

// Constants
export const SORT_STATUS_FIELD = "status";

const fields = [
  {
    name: "Touchpoint",
    className: "touchpoint-field",
  },
  {
    name: "ADN",
    className: "adn-field",
  },
  {
    name: "Weight",
    className: "weight-field",
  },
  {
    name: "Query",
    className: "query-field",
  },
  {
    name: "Status",
    className: "status-field",
    sortField: SORT_STATUS_FIELD,
  },
].map((item) => ({ ...item, _id: genearteId() }));

export default fields;
