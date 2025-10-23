// Librarys
import { memo } from "react";

function TriangleIcon() {
  return (
    <svg
      width="14"
      height="11"
      fill="none"
      viewBox="0 0 14 11"
      xmlns="http://www.w3.org/2000/svg"
      onClick={(e) => e.stopPropagation()}
    >
      <path d="M7 0L13.0622 10.5H0.937822L7 0Z" fill="#FF4E63" />
    </svg>
  );
}

export default memo(TriangleIcon);
