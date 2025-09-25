// Librarys
import { memo } from "react";

function AnswersTableFields() {
  return (
    <header className="answers-table-fields px-3 d-flex align-items-center">
      <div className="field-box field-info-box pe-3">
        <h6 className="field-info mb-0 fw-semibold">Info</h6>
      </div>

      <div className="field-box field-value-box ps-3">
        <h6 className="field-value mb-0 text-center fw-semibold">Value</h6>
      </div>
    </header>
  );
}

export default memo(AnswersTableFields);
