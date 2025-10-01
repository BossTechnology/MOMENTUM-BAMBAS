// Librarys
import { memo } from "react";

function Message() {
  return (
    <p className="message">
      Combustible reflects the equipment's fuel consumption rate in gallons per
      hour. The value shown is calculated from recent engine telemetry and
      represents the average usage during the current operating cycle.
      <br />
      <br />
      Use this metric to track efficiency, compare performance across shifts,
      and identify abnormal spikes that may indicate mechanical issues or
      inefficient operating practices.
    </p>
  );
}

export default memo(Message);
