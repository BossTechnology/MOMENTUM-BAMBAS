// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Components
import Button from "../../Button";
import AiIcon from "./icons/ai-icon";
import Portal from "../../Modal/Portal";

// Utils
import classnames from "../../../utils/classnames";

function Tooltip({ hide, title, message }) {
  return (
    <article
      className={classnames([
        window.innerWidth <= 1400 ? "left" : "bottom",
        "tooltip-box d-flex flex-column position-absolute",
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

      <Button title="+ Detalles" className="fw-light btn-details ms-auto" />
    </article>
  );
}

Tooltip.propTypes = {
  hide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default memo(Tooltip);
