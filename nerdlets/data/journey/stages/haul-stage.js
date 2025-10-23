// Components
import Truck2Icon from "./icons/truck2-icon";

// Constants
import { HAUL } from "../stages-id";

const haulStage = {
  ai: true,
  active: true,
  stageId: HAUL,
  percentage: 45,
  icon: <Truck2Icon />,
  name: "CARGA EN BANCO",
  aiMessage:
    "El camión se encuentra en proceso de carga con el equipo de pala o cargador frontal. Se monitorean tiempos de espera en cola, número de pases y factor de llenado para evitar subcarga o sobrecarga.\n\n" +
    "La coordinación con el operador de pala reduce tiempos muertos y mejora el match factor. PerformanceIndicators: tiempo de cola, pases de carga, % de utilización del equipo.",
};

export default haulStage;
