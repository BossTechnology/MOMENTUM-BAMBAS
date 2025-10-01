// Librarys
import PropTypes from "prop-types";

// Components
import ArrowDownIcon from "../icons/arrow-down-icon";

// Utils
import classnames from "../../../utils/classnames";
import isValidString from "../../../utils/isValidString";

export default function TableField({ item, index }) {
  // Check if is the first field
  const isFirstField = index === 0;

  // Check if has sort field
  const hasSortField = isValidString(item?.sortField);

  return (
    <li
      className={classnames([
        item?.className,
        !isFirstField ? "justify-content-center" : null,
        "table-field-item d-flex align-items-center py-2 px-3",
      ])}
    >
      <div
        className={classnames([
          "box d-flex align-items-center column-gap-1",
          !isFirstField ? "justify-content-center" : null,
        ])}
      >
        {hasSortField && <ArrowDownIcon />}
        <span className="field-name fw-medium">{item?.name}</span>
      </div>
    </li>
  );
}

TableField.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
