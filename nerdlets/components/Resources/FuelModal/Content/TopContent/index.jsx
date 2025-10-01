// Librarys
import { memo } from "react";

// Components
import AiIcon from "../../../../icons/ai-icon";

function TopContent() {
  return (
    <div className="top-content d-flex align-items-center column-gap-2">
      <AiIcon />

      <h6 className="title mb-0 w-100 text-uppercase text-center fw-semibold">
        Combustible
      </h6>
    </div>
  );
}

export default memo(TopContent);
