// Librarys
import { memo } from "react";

// Components
import AiIcon from "../icons/ai-icon";

// Utils
import classnames from "../../utils/classnames";

// Constants
import { AI_MESSAGE, USER_MESSAGE } from "./constants";

function Comment({ comment, type = USER_MESSAGE }) {
  // Define flags
  const isAiComment = type === AI_MESSAGE;
  const isUserComment = type === USER_MESSAGE;

  return (
    <div className={classnames([type, "comment-box d-flex pe-2"])}>
      <div className="user-logo-box rounded-circle d-flex align-items-center justify-content-center">
        {isAiComment && <AiIcon />}

        {isUserComment && (
          <span className="user-first-letter-name fw-semibold">M</span>
        )}
      </div>

      <p className="message fw-medium mb-0 mt-1">{comment}</p>
    </div>
  );
}

export default memo(Comment);
