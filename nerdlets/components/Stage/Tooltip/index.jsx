// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Components
import Button from "../../Button";
import Portal from "../../Modal/Portal";
import AiIcon from "../../icons/ai-icon";

// Utils
import classnames from "../../../utils/classnames";

function Tooltip({ hide, title, message, onViewDetails }) {
  return (
    <article
      role="tooltip"
      className={classnames([
        window.innerWidth <= 1400 ? "left" : "bottom",
        "tooltip-box d-flex flex-column position-absolute"
      ])}
    >
      <Portal wrapperId="modal-portal-container">
        <div
          role="dialog"
          onClick={hide}
          className="mask position-fixed top-0 start-0 end-0 bottom-0"
        />
      </Portal>

      <div className="d-flex align-items-center column-gap-2">
        <AiIcon />
        <h6 className="title mb-0 text-uppercase">{title}</h6>
      </div>

      <p className="message mt-2 mb-4">{message}</p>

      <Button title="Mas" className="fw-light btn-details ms-auto" onClick={onViewDetails} />
    </article>
  );
}

Tooltip.propTypes = {
  onViewDetails: PropTypes.func,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default memo(Tooltip);
