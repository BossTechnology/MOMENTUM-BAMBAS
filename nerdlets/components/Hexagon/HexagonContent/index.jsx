// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Components
import Button from "../../Button";

function HexagonContent({ icon, onClick, percentage }) {
  return (
    <div className="hexagon-content position-absolute d-flex align-items-center justify-content-center">
      {icon && (
        <Button
          icon={icon}
          onClick={onClick}
          title={`${percentage}%`}
          titlePopup="Click to see more information...."
          className="btn-hexagon pb-1 px-0 pt-0 w-100 h-100 bg-transparent flex-column"
        />
      )}
    </div>
  );
}

HexagonContent.propTypes = {
  icon: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default memo(HexagonContent);
