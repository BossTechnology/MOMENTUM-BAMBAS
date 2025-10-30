// Librarys
import PropTypes from "prop-types";

// Components
import Stage from "../../Stage";

// Hooks
import useStageList from "./useStageList";

// Utils
import classnames from "../../../utils/classnames";
import createValidArray from "../../../utils/createValidArray";

export default function StageList({ stages, className, onViewDetails }) {
  const { handleClickStage } = useStageList();

  return (
    <ul
      className={classnames([
        className,
        "stage-list d-flex align-items-center list-unstyled p-0 m-0"
      ])}
    >
      {createValidArray(stages).map((item) => (
        <li key={`stage-item-${item?._id}`} className={classnames(["stage-item", item?.size])}>
          <Stage
            {...item}
            onClick={() => handleClickStage(item)}
            onViewDetails={() => onViewDetails(item)}
            percentage={item.percentage}
          />
        </li>
      ))}
    </ul>
  );
}

StageList.propTypes = {
  className: PropTypes.string,
  onViewDetails: PropTypes.func,
  stages: PropTypes.arrayOf(PropTypes.object).isRequired
};
