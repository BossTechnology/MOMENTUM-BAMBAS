// Librarys
import PropTypes from "prop-types";

// Components
import Button from "../Button";
import CopyIcon from "./icons/copy-icon";
import PlusIcon from "./icons/plus-icon";
import TrashIcon from "./icons/trash-icon";

export default function TouchpointActions({ onAdd, onDelete, onDuplicate }) {
  return (
    <div className="touchpoint-actions-box d-flex align-items-center column-gap-4">
      <Button
        onClick={onAdd}
        icon={<PlusIcon />}
        title="Touchpoint"
        titlePopup="Click for add new touchpoint"
        className="btn-add-touchpoint p-0 flex-column row-gap-1 bg-transparent"
      />

      <Button
        icon={<CopyIcon />}
        onClick={onDuplicate}
        titlePopup="Click for duplicate touchpoint"
        className="btn-duplicate-touchpoint p-0 flex-column row-gap-1 bg-transparent"
        title="duplicate"
      />

      <Button
        title="delete"
        titlePopup="Click for delete touchpoint"
        className="btn-delete-touchpoint p-0 flex-column row-gap-1 bg-transparent"
        icon={<TrashIcon />}
        onClick={onDelete}
      />
    </div>
  );
}

TouchpointActions.propTypes = {
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
  onDuplicate: PropTypes.func,
};
