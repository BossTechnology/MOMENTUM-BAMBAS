// Librarys
import { memo } from "react";

function Dot() {
  return (
    <div className="dot-box d-grid position-absolute">
      <div className="dot"></div>
    </div>
  );
}

export default memo(Dot);
