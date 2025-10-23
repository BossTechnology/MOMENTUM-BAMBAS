// Components
import BrakeIcon from "./icons/brake-icon";

// Constants
import { MAINTENANCE } from "../stages-id";

const maintenanceStage = {
  ai: true,
  active: true,
  percentage: 44,
  icon: <BrakeIcon />,
  stageId: MAINTENANCE,
  name: "MANTENIMIENTO DE VÍA",
  aiMessage:
    "Se realizan trabajos de conservación de vía (perfilado, riego, bacheo) que pueden afectar el tránsito. " +
    "Se implementan desvíos y control de polvo para mantener condiciones seguras y visibilidad adecuada.\n\n" +
    "Cualquier restricción se comunica al despacho para replanificar rutas y evitar cuellos de botella. " +
    "PerformanceIndicators: tramos intervenidos, velocidad promedio en obra, tiempo de restricción.",
};

export default maintenanceStage;
