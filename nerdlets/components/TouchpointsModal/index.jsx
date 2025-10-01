// Librarys
import PropTypes from "prop-types";

// Components
import Modal from "../Modal";
import Content from "./Content";

export default function TouchpointsModal(props) {
  return (
    <Modal {...props} className="touchpoints-modal">
      <Content />
    </Modal>
  );
}

TouchpointsModal.propTypes = {
  isShowing: PropTypes.bool,
  onHide: PropTypes.func.isRequired,
};
