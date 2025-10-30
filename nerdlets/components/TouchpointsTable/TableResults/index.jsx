// Librarys
import PropTypes from "prop-types";

// Components
import TableResult from "./TableResult";

// Utils
import createValidArray from "../../../utils/createValidArray";

export default function TableResults({ results, onClickQuery }) {
  return (
    <ul className="table-results list-unstyled p-0 m-0 d-flex flex-column">
      {createValidArray(results).map((item, i) => (
        <TableResult
          item={item}
          onClickQuery={() => onClickQuery(item)}
          key={`table-touchpoint-item-${i}-${item?._id}`}
        />
      ))}
    </ul>
  );
}

TableResults.propTypes = {
  onClickQuery: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired
};
