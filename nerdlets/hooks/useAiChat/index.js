// Hooks
import { useRef, useState, useCallback } from "react";

// Utils
import isString from "../../utils/isString";

// Constants
import { initialChatMessages } from "./constants";
import { USER_MESSAGE } from "../../components/Comment/constants";

const DELAY = 100;

/**
 * Hook for implements logic AiChat component
 */
export default function useAiChat() {
  const scrollbarRef = useRef(null);
  const [messages, setMessages] = useState(initialChatMessages);

  // Callback for make scroll to end chat
  const scrollToEndChat = useCallback(() => {
    const timeout = setTimeout(() => {
      if (scrollbarRef.current) {
        scrollbarRef.current.scrollTop = scrollbarRef.current.scrollHeight;
      }

      clearTimeout(timeout);
    }, DELAY);
  }, [scrollbarRef.current]);

  // Callback for add new user message
  const addNewUserMessage = useCallback(
    (newMessage) => {
      // Check 'newMessage' param
      if (!isString(newMessage)) return;

      // Add new user message
      setMessages((prev) => [
        ...prev,
        { type: USER_MESSAGE, message: newMessage },
      ]);

      scrollToEndChat();
    },
    [scrollToEndChat]
  );

  return {
    messages: messages,
    scrollbarRef: scrollbarRef,
    addNewUserMessage: addNewUserMessage,
  };
}
