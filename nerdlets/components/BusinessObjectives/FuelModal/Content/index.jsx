// Components
import Message from "./Message";
import Comments from "./Comments";
import TopContent from "./TopContent";
import CommentForm from "../../../CommentForm";

// Hooks
import useContent from "./useContent";

export default function FuelModalContent() {
  const { comments, hasComments, handleSubmit, scrollbarRef } = useContent();

  return (
    <div className="main-content d-flex flex-column align-items-between">
      <TopContent />

      <div ref={scrollbarRef} className="scrollbar-box little-scrollbar pe-2">
        <Message />
        {hasComments && <Comments comments={comments} />}
      </div>

      <CommentForm onSubmit={handleSubmit} />
    </div>
  );
}
