// Utils
import isValidArray from "../../../utils/isValidArray";
import isValidNumber from "../../../utils/isValidNumber";
import isValidObject from "../../../utils/isValidObject";
import createValidArray from "../../../utils/createValidArray";

/**
 * Callback for transform stage lists
 * @param {object} params Params
 */
export default function transformStageLists(params) {
  // Create valid params
  const items = createValidArray(params?.apiResponse);
  const stageLists = createValidArray(params?.stageLists);

  const newStageLists = [...stageLists];

  for (let i = 0; i < items.length; i++) {
    // Get item
    const item = items[i];
    const row = item?.row;
    const position = item?.position;

    // Validate 'row' and 'position' fields
    if (!isValidNumber(row) || !isValidNumber(position)) continue;

    // Check if exists row
    const itemRow = newStageLists[row];

    // Validate 'itemRow' field
    if (!isValidObject(itemRow)) continue;

    // Get stage of item row
    const stage = itemRow?.stage;

    // Validate 'stage' field
    if (!isValidArray(stage)) continue;

    // Check if exists position
    const stageItem = stage[position];

    // Validate 'stageItem' field
    if (!isValidObject(stageItem)) continue;

    // Hola Camilo, a continuación debes pasar la data que viene de la api al stageo, debes guiarte con el json que te envie, alli tiene la estructura completa del stage

    /**
     * Mi recomendación es que al momento de crear los contextos para fuel, tires y production, crees funciones que esten al mismo nivel de 'transformStageLists' y las llames, pasando la data que necesitas. Por ejemplo:
     * 
     * // Utils
        import isValidArray from "../../../utils/isValidArray";
        import isValidNumber from "../../../utils/isValidNumber";
        import isValidObject from "../../../utils/isValidObject";
        import createValidArray from "../../../utils/createValidArray";
        
        import createFuelContext from "./createFuelContext";
        import createTiresContext from "./createTiresContext";
        import createProductionContext from "./createProductionContext";
     *
     * const fuelContext = createFuelContext({ ... })
     * const tiresContext = createTiresContext({ ... })
     * const productionContext = createProductionContext({ ... })
     *
     * context: {
     *  fuel: fuelContext,
     *  tires: tiresContext,
     *  production: productionContext,
     * }
     * 
     * Además ten encuenta que row y position se toman desde indice 0
     */

    // Define stage with context with API data
    const stage = {
      ...stageItem,

      percentage: item?.percentage,

      // Stage context
      context: {
        // Fuel context
        fuel: {
          performanceIndicator: {
            total: item?.total_performanceIndicator,
            status: "low",
          },

          riskMeter: {
            value: item?.risk_meter_value,
            percentage: item?.risk_meter_percentage,
          },

          touchpoints: [],
          answersEngine: [],
        },

        // Tires context
        tires: {
          hoursOfLife: 20,
          performanceIndicator: { total: 35, status: "" },
          riskMeter: { value: 45, percentage: 15 },
          answersEngine: [],
          touchpoints: [],
        },

        // Production context
        production: {
          performanceIndicator: { total: 50, status: "" },
          riskMeter: { value: 30, percentage: 90 },
          answersEngine: [],
        },
      },
    };

    // Assign stage to stage item
    newStageLists[row].stage[position] = stage;
  }

  return newStageLists;
}
