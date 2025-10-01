// Librarys
import { memo } from "react";

function PlusIcon({ size = 30 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="15" cy="15" r="15" fill="#F7F7F8" />
      <path
        fill="#333333"
        transform="translate(9 9)"
        d="M5.99994 0C5.58572 0 5.24999 0.335863 5.24999 0.749942V5.24999L0.749942 5.25012C0.335729 5.25012 0 5.58599 0 6.00007C0 6.41428 0.335863 6.75001 0.749942 6.75001H5.24999V11.2501C5.24999 11.6643 5.58586 12 5.99994 12C6.41415 12 6.74988 11.6641 6.74988 11.2501L6.75001 6.75001H11.2501C11.6643 6.75001 12 6.41414 12 6.00007C12 5.58585 11.6641 5.25012 11.2501 5.25012H6.75001V0.750072C6.75001 0.33586 6.41428 0.000130791 6.00007 0.000130791L5.99994 0Z"
      />
    </svg>
  );
}

export default memo(PlusIcon);
