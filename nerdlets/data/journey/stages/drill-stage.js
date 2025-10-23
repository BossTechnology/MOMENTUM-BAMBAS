// Components
import HandbrakeIcon from "./icons/handbrake-icon";

// Constants
import { DRILL } from "../stages-id";

const drillStage = {
  ai: true,
  active: true,
  stageId: DRILL,
  percentage: 10,
  icon: <HandbrakeIcon />,
  name: "INCIDENCIA / OBSERVACIÓN",
  aiMessage:
    "Se reportó un evento operativo o de seguridad (alerta del operador, condición anómala o falla incipiente). " +
    "Debe evaluarse y clasificar la criticidad para determinar si se detiene la unidad o se continúa bajo control.\n\n" +
    "El registro completo (hora, ubicación, evidencia) acelera la atención y evita reincidencias. " +
    "PerformanceIndicators: tiempo de atención, tasa de reincidencia, % incidencias cerradas en turno.",
};

export default drillStage;
