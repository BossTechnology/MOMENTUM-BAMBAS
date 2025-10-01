// Hooks
import { useState, useCallback } from "react";

// Utils
import isFunction from "../../utils/isFunction";
import isValidString from "../../utils/isValidString";

/**
 * Hook for implements logic CommentForm component
 * @param {object} params Params
 */
export default function useCommentForm({ onSubmit }) {
  const [value, setValue] = useState("");

  // Change event in input text
  const handleChangeValue = useCallback((event) => {
    setValue(event?.target?.value);
  }, []);

  // Callback for add comment
  const handleAddComment = useCallback(() => {
    // Validate 'onSubmit' callback
    if (!isFunction(onSubmit)) return;

    onSubmit(value);
  }, [value, onSubmit]);

  return {
    value: value,
    handleAddComment: handleAddComment,
    handleChangeValue: handleChangeValue,
    isDisabledButton: !isValidString(value),
  };
}
