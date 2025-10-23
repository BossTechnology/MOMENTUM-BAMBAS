// Components
import Truck4Icon from "./icons/truck4-icon";

// Constants
import { RETURN } from "../stages-id";

const returnStage = {
  ai: false,
  active: true,
  stageId: RETURN,
  percentage: 24,
  icon: <Truck4Icon />,
  name: "TRÁNSITO VACÍO / RETORNO",
  aiMessage:
    "La unidad retorna sin carga al frente asignado para un nuevo ciclo. Se busca mantener velocidades seguras y constantes para minimizar el tiempo improductivo.\n\n" +
    "Paradas prolongadas deben registrarse con causa para análisis de disponibilidad. PerformanceIndicators: tiempo de retorno, paradas no programadas, disponibilidad operativa.",
};

export default returnStage;
