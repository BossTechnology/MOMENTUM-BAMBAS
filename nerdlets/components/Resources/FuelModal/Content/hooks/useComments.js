// Hooks
import { useState, useCallback } from "react";

// Utils
import isValidArray from "../../../../../utils/isValidArray";
import isValidString from "../../../../../utils/isValidString";

/**
 * Hook for implements logic for add comments to modal
 */
export default function useComments() {
  const [comments, setComments] = useState([
    "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,",
    "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,",
  ]);

  // Check if has comments
  const hasComments = isValidArray(comments);

  // Callback for add comment
  const addComment = useCallback((newComment) => {
    // Validate 'newComment' param
    if (!isValidString(newComment)) return;

    // Add comment
    setComments((prev) => [...prev, newComment]);
  }, []);

  return {
    comments: comments,
    addComment: addComment,
    hasComments: hasComments,
  };
}
