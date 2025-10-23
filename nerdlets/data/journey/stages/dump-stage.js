// Components
import Truck5Icon from "./icons/truck5-icon";

// Constants
import { DUMP } from "../stages-id";

const dumpStage = {
  ai: false,
  active: true,
  stageId: DUMP,
  percentage: 35,
  icon: <Truck5Icon />,
  name: "DESCARGA / VOLTEO",
  aiMessage:
    "El camión ejecuta la descarga en tolva, chancadora o punto de disposición autorizado. Se valida la cola en destino y se evita el derrame fuera de zona para preservar la seguridad.\n\n" +
    "Retrasos en báscula o tolva deben registrarse para gestión con el área responsable. PerformanceIndicators: tiempo de descarga, tiempo en cola de destino, incidencias de seguridad.",
};

export default dumpStage;
