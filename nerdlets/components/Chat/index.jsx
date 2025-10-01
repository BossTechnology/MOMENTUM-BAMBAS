// Librarys
import PropTypes from "prop-types";

// Components
import Comment from "../Comment";

export default function Chat({ messages }) {
  return (
    <ul className="chat-box list-unstyled mb-0 d-flex flex-column row-gap-4">
      {messages.map((item, i) => (
        <Comment
          type={item?.type}
          comment={item?.message}
          key={`chat-message-${i}-${item?._id}`}
        />
      ))}
    </ul>
  );
}

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};
