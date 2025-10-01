// Librarys
import PropTypes from "prop-types";

// Components
import Hexagon from "../../Hexagon";

// Hooks
import useHexagonList from "./useHexagonList";

// Utils
import classnames from "../../../utils/classnames";
import createValidArray from "../../../utils/createValidArray";

export default function HexagonList({ hexagons, className, onViewDetails }) {
  const { handleClickHexagon } = useHexagonList();

  return (
    <ul
      className={classnames([
        className,
        "hexagon-list d-flex align-items-center list-unstyled p-0 m-0",
      ])}
    >
      {createValidArray(hexagons).map((item) => (
        <li className="hexagon-item" key={`hexagon-item-${item?._id}`}>
          <Hexagon
            {...item}
            onClick={() => handleClickHexagon(item)}
            onViewDetails={() => onViewDetails(item)}
          />
        </li>
      ))}
    </ul>
  );
}

HexagonList.propTypes = {
  className: PropTypes.string,
  onViewDetails: PropTypes.func,
  hexagons: PropTypes.arrayOf(PropTypes.object).isRequired,
};
