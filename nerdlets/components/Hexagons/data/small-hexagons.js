// Components
import BrakeIcon from "../icons/brake-icon";
import HandbrakeIcon from "../icons/handbrake-icon";

// Utils
import generateId from "../../../utils/generateId";

const smallHexagons = [
  {
    active: false,
  },
  {
    active: false,
  },
  {
    active: false,
  },
  {
    active: true,
    icon: <BrakeIcon />,
    tooltip: {
      title: "MANTENIMIENTO DE VÍA",
      message:
        "Se realizan trabajos de conservación de vía (perfilado, riego, bacheo) que pueden afectar el tránsito. " +
        "Se implementan desvíos y control de polvo para mantener condiciones seguras y visibilidad adecuada. " +
        "Cualquier restricción se comunica al despacho para replanificar rutas y evitar cuellos de botella. " +
        "KPIs: tramos intervenidos, velocidad promedio en obra, tiempo de restricción.",
    },
  },
  {
    active: false,
  },
  {
    active: false,
  },
  {
    active: true,
    icon: <HandbrakeIcon />,
    tooltip: {
      title: "INCIDENCIA / OBSERVACIÓN",
      message:
        "Se reportó un evento operativo o de seguridad (alerta del operador, condición anómala o falla incipiente). " +
        "Debe evaluarse y clasificar la criticidad para determinar si se detiene la unidad o se continúa bajo control. " +
        "El registro completo (hora, ubicación, evidencia) acelera la atención y evita reincidencias. " +
        "KPIs: tiempo de atención, tasa de reincidencia, % incidencias cerradas en turno.",
    },
  },
  {
    active: false,
  },
  {
    active: false,
  },
  {
    active: false,
  },
].map((item) => ({ ...item, _id: generateId() }));

export default smallHexagons;
