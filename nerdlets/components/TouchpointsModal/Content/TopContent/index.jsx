// Librarys
import { memo } from "react";

// Components
import TouchpointActions from "../../../TouchpointActions";

function TopContent({ selectedStage }) {
  return (
    <div className="top-content d-flex align-items-center justify-content-between column-gap-5 mb-3">
      <div className="box d-flex align-items-center">
        {selectedStage.icon}

        <h6 className="title mb-0 text-uppercase fw-semibold">
          {selectedStage.tooltip?.title}
        </h6>
      </div>

      <TouchpointActions />
    </div>
  );
}

export default memo(TopContent);
