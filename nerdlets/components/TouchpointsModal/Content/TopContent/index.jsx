// Librarys
import { memo } from "react";

// Components
import TouchpointActions from "../../../TouchpointActions";

function TopContent({ selectedHexagon }) {
  return (
    <div className="top-content d-flex align-items-center justify-content-between column-gap-5 mb-3">
      <div className="box d-flex align-items-center">
        {selectedHexagon.icon}

        <h6 className="title mb-0 text-uppercase fw-semibold">
          {selectedHexagon.tooltip?.title}
        </h6>
      </div>

      <TouchpointActions />
    </div>
  );
}

export default memo(TopContent);
