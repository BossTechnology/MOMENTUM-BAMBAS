// Librarys
import PropTypes from "prop-types";

// Components
import TableField from "./TableField";

// Utils
import createValidArray from "../../utils/createValidArray";

export default function TableFields({ fields }) {
  return (
    <ul className="table-fields d-flex align-items-center list-unstyled p-0 m-0">
      {createValidArray(fields).map((item, i) => (
        <TableField
          index={i}
          item={item}
          key={`table-field-${i}-${item?._id}`}
        />
      ))}
    </ul>
  );
}

TableFields.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
};
