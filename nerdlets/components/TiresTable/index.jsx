// Librarys
import PropTypes from "prop-types";

// Components
import TableFields from "../TableFields";
import TableResults from "./TableResults";
import EmptyResults from "../EmptyResults";

// Utils
import isValidArray from "../../utils/isValidArray";

// Constants
import fields from "./fields";

export default function TiresTable({ touchpoints, onClickQuery }) {
  // Check if has touchpoints
  const hasTouchpoints = isValidArray(touchpoints);

  return (
    <div className="tires-table d-flex flex-column">
      <TableFields fields={fields} />

      {hasTouchpoints && (
        <TableResults results={touchpoints} onClickQuery={onClickQuery} />
      )}

      {!hasTouchpoints && (
        <EmptyResults message="There are no touchpoints to display....." />
      )}
    </div>
  );
}

TiresTable.propTypes = {
  onClickQuery: PropTypes.func.isRequired,
  touchpoints: PropTypes.arrayOf(PropTypes.object).isRequired,
};
