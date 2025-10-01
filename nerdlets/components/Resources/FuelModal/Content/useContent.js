// Hooks
import { useRef, useCallback } from "react";
import useComments from "./hooks/useComments";

const DELAY = 100;

/**
 * Hook for implements FuelModalContent component
 */
export default function useContent() {
  const comments = useComments();
  const scrollbarRef = useRef(null);

  // Submit event in form
  const handleSubmit = useCallback(
    (newComment) => {
      comments.addComment(newComment);

      const timeout = setTimeout(() => {
        if (scrollbarRef.current) {
          scrollbarRef.current.scrollTop = scrollbarRef.current.scrollHeight;
        }

        clearTimeout(timeout);
      }, DELAY);
    },
    [comments.addComment, scrollbarRef.current]
  );

  return {
    ...comments,

    handleSubmit: handleSubmit,
    scrollbarRef: scrollbarRef,
  };
}
