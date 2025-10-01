// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Components
import Button from "../Button";
import TextArea from "../TextArea";

// Hooks
import useCommentForm from "./useCommentForm";

function CommentForm({ onSubmit }) {
  const { value, isDisabledButton, handleAddComment, handleChangeValue } =
    useCommentForm({
      onSubmit: onSubmit,
    });

  return (
    <div className="comment-form d-flex flex-column row-gap-2">
      <TextArea
        rows={2}
        value={value}
        onChange={handleChangeValue}
        placeholder="Write here...."
      />

      <Button
        title="Add comment"
        className="btn-add-comment btn-submit"
        disabled={isDisabledButton}
        onClick={handleAddComment}
      />
    </div>
  );
}

CommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default memo(CommentForm);
