// Librarys
import PropTypes from "prop-types";

// Components
import Content from "./Content";
import Modal from "../../Modal";

export default function FuelModal(props) {
  return (
    <Modal {...props} centered className="fuel-modal">
      <Content />
    </Modal>
  );
}

FuelModal.propTypes = {
  isShowing: PropTypes.bool,
  onHide: PropTypes.func.isRequired,
};
