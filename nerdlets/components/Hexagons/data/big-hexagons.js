// Components
import Truck1Icon from "../icons/truck1-icon";
import Truck2Icon from "../icons/truck2-icon";
import Truck3Icon from "../icons/truck3-icon";
import Truck4Icon from "../icons/truck4-icon";
import Truck5Icon from "../icons/truck5-icon";

// Utils
import generateId from "../../../utils/generateId";

const bigHexagons = [
  { active: false },
  { active: false },
  { active: false },

  {
    active: true,
    icon: <Truck1Icon />,
    percentage: 80,
    tooltip: {
      title: "TRÁNSITO CARGADO",
      message:
        "La unidad se desplaza con material desde el frente de carga hacia su destino asignado. Se controla velocidad, paradas no programadas y cumplimiento de la ruta segura.\n\n" +
        "Cualquier desvío o reducción de velocidad sostenida impacta el ciclo y el rendimiento horario. KPIs: velocidad promedio cargado, tiempo de tránsito, eventos de seguridad.",
    },
  },
  {
    active: true,
    percentage: 40,
    icon: <Truck2Icon />,
    tooltip: {
      title: "CARGA EN BANCO",
      message:
        "El camión se encuentra en proceso de carga con el equipo de pala o cargador frontal. Se monitorean tiempos de espera en cola, número de pases y factor de llenado para evitar subcarga o sobrecarga.\n\n" +
        "La coordinación con el operador de pala reduce tiempos muertos y mejora el match factor. KPIs: tiempo de cola, pases de carga, % de utilización del equipo.",
    },
  },
  {
    active: true,
    icon: <Truck3Icon />,
    percentage: 20,
    tooltip: {
      title: "TRANSPORTE DE MINERAL",
      message:
        "Traslado de mineral hacia chancado, stockpile o zona de acopio autorizada. Se prioriza la trazabilidad origen–destino para mantener la ley objetivo y el plan de mezcla.\n\n" +
        "Se revisan desvíos, baches y restricciones de vía que puedan penalizar el ciclo. KPIs: cumplimiento de ruta, tiempo de viaje, toneladas-kilómetro.",
    },
  },
  {
    active: true,
    icon: <Truck4Icon />,
    percentage: 100,
    tooltip: {
      title: "TRÁNSITO VACÍO / RETORNO",
      message:
        "La unidad retorna sin carga al frente asignado para un nuevo ciclo. Se busca mantener velocidades seguras y constantes para minimizar el tiempo improductivo.\n\n" +
        "Paradas prolongadas deben registrarse con causa para análisis de disponibilidad. KPIs: tiempo de retorno, paradas no programadas, disponibilidad operativa.",
    },
  },
  {
    active: true,
    icon: <Truck5Icon />,
    percentage: 35,
    tooltip: {
      title: "DESCARGA / VOLTEO",
      message:
        "El camión ejecuta la descarga en tolva, chancadora o punto de disposición autorizado. Se valida la cola en destino y se evita el derrame fuera de zona para preservar la seguridad.\n\n" +
        "Retrasos en báscula o tolva deben registrarse para gestión con el área responsable. KPIs: tiempo de descarga, tiempo en cola de destino, incidencias de seguridad.",
    },
  },

  { active: false },
  { active: false },
  { active: false },
].map((item) => ({ ...item, _id: generateId() }));

export default bigHexagons;
