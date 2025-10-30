import touchpoints from "../tools/touchpointsArray";

function normalizeStageName(name) {
  if (!name) return name;

  const map = {
    "Detenido vacío": "Stopped Empty",
    "Detenido cargado": "Stopped Loaded",
    Cargando: "Loading",
    "Completamente cargado": "Fully Loaded",
    "Viajando cargado": "Traveling Loaded",
    "Viajando vacío": "Traveling Empty",
    Descargando: "Dumping",

    // Also map English -> Spanish just in case the reverse is true
    "Stopped Empty": "Detenido vacío",
    "Stopped Loaded": "Detenido cargado",
    Loading: "Cargando",
    "Fully Loaded": "Completamente cargado",
    "Traveling Loaded": "Viajando cargado",
    "Traveling Empty": "Viajando vacío",
    Dumping: "Descargando"
  };

  return map[name] || name;
}

/**
 * Find the rawResults row that corresponds to the selected stage.
 *
 * We assume rawResults is an array of objects like:
 * [
 *   {
 *     facet: "Stopped Empty",
 *     transmission_input_speedtrans_ctrl_rpm: 734,
 *     engine_coolant_temperatureengine_deg_f: 194.2,
 *     ...
 *   },
 *   ...
 * ]
 *
 * We'll try both the stage name and the normalized stage name when matching.
 */
function findResultRowForStage(rawResults, selectedStage) {
  if (!Array.isArray(rawResults)) return null;
  if (!selectedStage) return null;

  // candidate names describing this stage
  const stageCandidates = [selectedStage.idStage, selectedStage.label, selectedStage.name].filter(
    Boolean
  );

  // also include normalized versions for bilingual match
  const normalized = stageCandidates.map(normalizeStageName);

  // dedupe candidates
  const needles = Array.from(new Set([...stageCandidates, ...normalized]));

  // try to find a row whose facet matches any of those names
  for (const needle of needles) {
    const hit = rawResults.find((row) => row.facet === needle);
    if (hit) {
      return hit;
    }
  }

  return null;
}

/**
 * Return the current numeric value for a given metric:
 * 1. Prefer the specific rawResults row for this stage (stageRow[metricName]).
 * 2. Fallback to selectedStage.metrics[metricName]
 * 3. Fallback to selectedStage.context.metrics[metricName]
 */
function getMetricValue(metricName, stageRow, selectedStage) {
  if (stageRow && Object.prototype.hasOwnProperty.call(stageRow, metricName)) {
    return stageRow[metricName];
  }

  if (
    selectedStage?.metrics &&
    Object.prototype.hasOwnProperty.call(selectedStage.metrics, metricName)
  ) {
    return selectedStage.metrics[metricName];
  }

  if (
    selectedStage?.context?.metrics &&
    Object.prototype.hasOwnProperty.call(selectedStage.context.metrics, metricName)
  ) {
    return selectedStage.context.metrics[metricName];
  }

  return null;
}

function getStatusForValue(value, lower, upper) {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return "queued";
  }

  if (value >= lower && value <= upper) return "success";
  if (value < lower) return "warning";
  if (value > upper) return "danger";

  return "WARN";
}

/**
 * Build the NRQL query string we show in QueryView / TouchpointQuery.
 * You can change "PinchSample" to the New Relic event/table you actually query.
 */
function buildQueryString(metricName, stageName = "Unknown Stage") {
  return `FROM PinchSample SELECT latest(${metricName}) WHERE stage = '${stageName}'`;
}

/**
 * Main builder.
 *
 * Inputs:
 *   selectedStage: the stage object user clicked ("Detenido vacío", etc.)
 *   rawResults:    array of telemetry rows from NRQL (stored in useDataStore.rawResults)
 *
 * Output:
 *   Array of rows we pass to <TouchpointsTable /> and then <TableResults />.
 *
 * Each row looks like:
 * {
 *   id: "transmission_input_speedtrans_ctrl_rpm",
 *   name: "transmission_input_speedtrans_ctrl_rpm",
 *   value: 734,
 *   lower: 0,
 *   upper: 2021,
 *   status: "OK",
 *   dna: "Natural",
 *   weight: "MED",
 *   query: "FROM PinchSample SELECT latest(transmission_input_speedtrans_ctrl_rpm) WHERE stage = 'Detenido vacío'"
 * }
 */
export default function buildTouchpointRows(selectedStage, rawResults) {
  const rows = [];

  const stageName =
    selectedStage?.idStage || selectedStage?.label || selectedStage?.name || "Unknown Stage";

  // Find the rawResults row that corresponds to this stage
  const stageRow = findResultRowForStage(rawResults, selectedStage);

  // Debug to verify we actually matched the correct row
  // (You can leave this while testing, then remove)
  // console.log("buildTouchpointRows stageName:", stageName);
  // console.log("buildTouchpointRows matched stageRow:", stageRow);

  // touchpoints is an array like:
  // [
  //   {
  //     transmission_input_speedtrans_ctrl_rpm: {
  //       TouchpointName: "transmission_input_speedtrans_ctrl_rpm",
  //       DNA: "Natural",
  //       Weight: "MED",
  //       lower: 0,
  //       upper: 2021
  //     }
  //   },
  //   ...
  // ]
  touchpoints.forEach((entry) => {
    const metricName = Object.keys(entry)[0];
    const meta = entry[metricName];
    if (!metricName || !meta) return;

    const lower = meta.lower;
    const upper = meta.upper;

    // pull metric reading from either rawResults[facetRow] or selectedStage fallback
    const value = getMetricValue(metricName, stageRow, selectedStage);

    // derive health classification
    const status = getStatusForValue(value, lower, upper);

    // prebuild query string for "show query" button
    const query = buildQueryString(metricName, stageName);

    rows.push({
      id: metricName,
      name: meta.TouchpointName || metricName,
      value,
      lower,
      upper,
      status,
      dna: meta.DNA,
      weight: meta.Weight,
      query
    });
  });

  return rows;
}
