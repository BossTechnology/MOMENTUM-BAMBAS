// Utils
import isValidArray from "../../../utils/isValidArray";
import isValidNumber from "../../../utils/isValidNumber";
import isValidObject from "../../../utils/isValidObject";
import createValidArray from "../../../utils/createValidArray";

/**
 * Callback for transform hexagon lists
 * @param {object} params Params
 */
export default function transformHexagonLists(params) {
  // Create valid params
  const items = createValidArray(params?.apiResponse);
  const hexagonLists = createValidArray(params?.hexagonLists);

  const newHexagonLists = [...hexagonLists];

  for (let i = 0; i < items.length; i++) {
    // Get item
    const item = items[i];
    const row = item?.row;
    const position = item?.position;

    // Validate 'row' and 'position' fields
    if (!isValidNumber(row) || !isValidNumber(position)) continue;

    // Check if exists row
    const itemRow = newHexagonLists[row];

    // Validate 'itemRow' field
    if (!isValidObject(itemRow)) continue;

    // Get hexagons of item row
    const hexagons = itemRow?.hexagons;

    // Validate 'hexagons' field
    if (!isValidArray(hexagons)) continue;

    // Check if exists position
    const hexagonItem = hexagons[position];

    // Validate 'hexagonItem' field
    if (!isValidObject(hexagonItem)) continue;

    // Hola Camilo, a continuación debes pasar la data que viene de la api al hexagono, debes guiarte con el json que te envie, alli tiene la estructura completa del hexagon

    /**
     * Mi recomendación es que al momento de crear los contextos para fuel, tires y production, crees funciones que esten al mismo nivel de 'transformHexagonLists' y las llames, pasando la data que necesitas. Por ejemplo:
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

    // Define hexagon with context with API data
    const hexagon = {
      ...hexagonItem,

      percentage: item?.percentage,

      // Hexagon context
      context: {
        // Fuel context
        fuel: {
          kpi: { total: item?.total_kpi, status: "low" },

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
          kpi: { total: 35, status: "" },
          riskMeter: { value: 45, percentage: 15 },
          answersEngine: [],
          touchpoints: [],
        },

        // Production context
        production: {
          kpi: { total: 50, status: "" },
          riskMeter: { value: 30, percentage: 90 },
          answersEngine: [],
        },
      },
    };

    // Assign hexagon to hexagon item
    newHexagonLists[row].hexagons[position] = hexagon;
  }

  return newHexagonLists;
}
