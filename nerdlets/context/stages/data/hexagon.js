// Constants
export const BIG_HEXAGON = "big-hexagon";
export const SMALL_HEXAGON = "small-hexagon";

export const DEFAULT_KPI = {
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
    kpi: DEFAULT_KPI,
    riskMeter: DEFAULT_RISK_METER,
    touchpoints: [],
    answersEngine: [],
  },

  // Tires context
  tires: {
    hoursOfLife: 0,
    kpi: DEFAULT_KPI,
    riskMeter: DEFAULT_RISK_METER,
    answersEngine: [],
    touchpoints: [],
  },

  // Production context
  production: {
    kpi: DEFAULT_KPI,
    riskMeter: DEFAULT_RISK_METER,
    answersEngine: [],
  },
};
