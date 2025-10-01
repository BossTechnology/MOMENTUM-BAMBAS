// Librarys
import PropTypes from "prop-types";

// Components
import Modal from "../../Modal";
import Content from "./Content";

export default function TiresModal(props) {
  return (
    <Modal {...props} className="tires-modal">
      <Content />
    </Modal>
  );
}

TiresModal.propTypes = {
  isShowing: PropTypes.bool,
  onHide: PropTypes.func.isRequired,
};
