// Constants
export const BIG_HEXAGON = "big-stage";
export const SMALL_HEXAGON = "small-stage";

export const DEFAULT_PerformanceIndicator = {
  total: 0,
  status: "",
};

export const DEFAULT_RISK_METER = {
  value: 0,
  percentage: 0,
};

export const DEFAULT_HEXAGON_CONTEXT = {
  // Fuel context
  fuel: {
    performanceIndicator: DEFAULT_PerformanceIndicator,
    riskMeter: DEFAULT_RISK_METER,
    touchpoints: [],
    answersEngine: [],
  },

  // Tires context
  tires: {
    hoursOfLife: 0,
    performanceIndicator: DEFAULT_PerformanceIndicator,
    riskMeter: DEFAULT_RISK_METER,
    answersEngine: [],
    touchpoints: [],
  },

  // Production context
  production: {
    performanceIndicator: DEFAULT_PerformanceIndicator,
    riskMeter: DEFAULT_RISK_METER,
    answersEngine: [],
  },
};
