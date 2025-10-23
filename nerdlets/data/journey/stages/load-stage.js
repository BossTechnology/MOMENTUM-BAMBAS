// Components
import Truck1Icon from "./icons/truck1-icon";

// Constants
import { LOAD } from "../stages-id";

const loadStage = {
  ai: false,
  active: true,
  stageId: LOAD,
  percentage: 100,
  icon: <Truck1Icon />,
  name: "TRÁNSITO CARGADO",
  aiMessage:
    "La unidad se desplaza con material desde el frente de carga hacia su destino asignado. Se controla velocidad, paradas no programadas y cumplimiento de la ruta segura.\n\n" +
    "Cualquier desvío o reducción de velocidad sostenida impacta el ciclo y el rendimiento horario. PerformanceIndicators: velocidad promedio cargado, tiempo de tránsito, eventos de seguridad.",
};

export default loadStage;
