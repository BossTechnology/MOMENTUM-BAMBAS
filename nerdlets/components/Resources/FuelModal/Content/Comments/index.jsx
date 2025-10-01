// Librarys
import PropTypes from "prop-types";

// Components
import Comment from "../../../../Comment";

export default function Comments({ comments }) {
  return (
    <ul className="comment-list list-unstyled p-0 d-flex flex-column row-gap-3">
      {comments.map((comment, i) => (
        <Comment key={`fuel-modal-comment-${i}`} comment={comment} />
      ))}
    </ul>
  );
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
};
