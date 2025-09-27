// Librarys
import PropTypes from "prop-types";

// Components
import Hexagon from "../../Hexagon";

// Utils
import classnames from "../../../utils/classnames";
import createValidArray from "../../../utils/createValidArray";

export default function HexagonList({ hexagons, className }) {
  return (
    <ul
      className={classnames([
        className,
        "hexagon-list d-flex align-items-center list-unstyled p-0 m-0",
      ])}
    >
      {createValidArray(hexagons).map((item) => (
        <li className="hexagon-item" key={`hexagon-item-${item?._id}`}>
          <Hexagon {...item} />
        </li>
      ))}
    </ul>
  );
}

HexagonList.propTypes = {
  hexagons: PropTypes.arrayOf(PropTypes.object).isRequired,
};
