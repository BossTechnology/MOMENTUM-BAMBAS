/**
 * Transform API array into flat array of states
 * Evaluate values against custom limits
 * Also calculate sums + violation counts for specific keys
 *
 * @param {Array} arr - API response array
 * @param {Object} limits - { key: { lower: number|null, upper: number|null } }
 * @returns {Object}
 */
export const transformPanelData = (arr, limits = {}) => {
  if (!Array.isArray(arr)) {
    console.warn("Expected array, got:", typeof arr);
    return {
      data: [],
      totalAvgConsumption: 0,
      avgConsumptionViolations: 0,
      totalWorkingDistCommunication: 0,
      workingDistCommunicationViolations: 0
    };
  }

  let totalAvgConsumption = 0;
  let avgConsumptionViolations = 0;
  let totalWorkingDistCommunication = 0;
  let workingDistCommunicationViolations = 0;

  const data = arr.map((item) => {
    let outOfRangeCount = 0;
    let outOfRangeFields = [];

    Object.entries(item).forEach(([key, value]) => {
      // only check numeric metrics
      if (typeof value !== "number") return;

      const limitDef = limits[key];
      if (!limitDef) return; // no limits for this key

      const { lower, upper } = limitDef;

      // We explicitly check for "is a number", not truthiness.
      const hasLower = typeof lower === "number" && !Number.isNaN(lower);
      const hasUpper = typeof upper === "number" && !Number.isNaN(upper);

      const belowLower = hasLower ? value < lower : false;
      const aboveUpper = hasUpper ? value > upper : false;

      if (belowLower || aboveUpper) {
        outOfRangeCount += 1;
        outOfRangeFields.push(key);

        // Special tracking
        if (key === "avgConsumption" && aboveUpper) {
          avgConsumptionViolations += 1;
        }
        if (key === "WorkingDistCommunication" && aboveUpper) {
          workingDistCommunicationViolations += 1;
        }
      }
    });

    // Totals
    if (typeof item.avgConsumption === "number") {
      totalAvgConsumption += item.avgConsumption;
    }
    if (typeof item.WorkingDistCommunication === "number") {
      totalWorkingDistCommunication += item.WorkingDistCommunication;
    }
    // data return
    return {
      ...item,
      state: item.facet,
      outOfRangeCount,
      outOfRangeFields
    };
  });

  return {
    data,
    totalAvgConsumption,
    avgConsumptionViolations,
    totalWorkingDistCommunication,
    workingDistCommunicationViolations
  };
};

export default transformPanelData;
