// Components
import Truck3Icon from "./icons/truck3-icon";

// Constants
import { IDLE } from "./stages";

const idleStage = {
  active: true,
  stageId: IDLE,
  icon: <Truck3Icon />,
  name: "TRANSPORTE DE MINERAL",
  aiMessage:
    "Traslado de mineral hacia chancado, stockpile o zona de acopio autorizada. Se prioriza la trazabilidad origen–destino para mantener la ley objetivo y el plan de mezcla.\n\n" +
    "Se revisan desvíos, baches y restricciones de vía que puedan penalizar el ciclo. KPIs: cumplimiento de ruta, tiempo de viaje, toneladas-kilómetro.",
};

export default idleStage;
