const stages = [
  //First Row
  {
    ai: false,
    active: false,
    stageRow: 1,
    stagePosition: 1,
    iconName: "",
    name: "",
    idStage: ""
  },
  {
    ai: false,
    active: false,
    stageRow: 1,
    stagePosition: 2,
    iconName: "",
    name: "",
    idStage: ""
  },
  {
    ai: false,
    active: false,
    stageRow: 1,
    stagePosition: 3,
    iconName: "",
    name: "",
    idStage: ""
  },
  {
    ai: true,
    active: true,
    stageRow: 1,
    stagePosition: 4,
    iconName: "truck1-icon",
    name: "Viajando vacío",
    idStage: "Traveling Empty"
  },
  {
    ai: true,
    active: true,
    stageRow: 1,
    stagePosition: 5,
    iconName: "truck2-icon",
    name: "Cargando",
    idStage: "Loading"
  },
  {
    ai: true,
    active: true,
    stageRow: 1,
    stagePosition: 6,
    iconName: "truck3-icon",
    name: "Completamente cargado",
    idStage: "Fully Loaded"
  },
  {
    ai: true,
    active: true,
    stageRow: 1,
    stagePosition: 7,
    iconName: "truck4-icon",
    name: "Viajando cargado",
    idStage: "Traveling Loaded"
  },
  {
    ai: true,
    active: true,
    stageRow: 1,
    stagePosition: 8,
    iconName: "truck5-icon",
    name: "Descargando",
    idStage: "Dumping"
  },
  {
    ai: false,
    active: false,
    stageRow: 1,
    stagePosition: 9,
    iconName: "",
    name: "",
    idStage: ""
  },
  {
    ai: false,
    active: false,
    stageRow: 1,
    stagePosition: 10,
    iconName: "",
    name: "",
    idStage: ""
  },
  {
    ai: false,
    active: false,
    stageRow: 1,
    stagePosition: 11,
    iconName: "",
    name: "",
    idStage: ""
  },
  //second Row
  {
    ai: false,
    active: false,
    stageRow: 2,
    stagePosition: 1,
    iconName: "",
    name: "",
    idStage: ""
  },
  {
    ai: false,
    active: false,
    stageRow: 2,
    stagePosition: 2,
    iconName: "",
    name: "",
    idStage: ""
  },
  {
    ai: false,
    active: false,
    stageRow: 2,
    stagePosition: 3,
    iconName: "",
    name: "",
    idStage: ""
  },
  {
    ai: false,
    active: false,
    stageRow: 1,
    stagePosition: 1,
    iconName: "",
    name: "",
    idStage: ""
  },
  {
    ai: false,
    active: false,
    stageRow: 1,
    stagePosition: 2,
    iconName: "",
    name: "",
    idStage: ""
  },
  {
    ai: true,
    active: true,
    stageRow: 2,
    stagePosition: 4,
    iconName: "brake-icon",
    name: "Detenido vacío",
    idStage: "Stopped Empty"
  },
  {
    ai: false,
    active: false,
    stageRow: 2,
    stagePosition: 5,
    iconName: "",
    name: "",
    idStage: ""
  },
  {
    ai: false,
    active: false,
    stageRow: 2,
    stagePosition: 6,
    iconName: "",
    name: "",
    idStage: ""
  },
  {
    ai: true,
    active: true,
    stageRow: 2,
    stagePosition: 7,
    iconName: "handbrake-icon",
    name: "Detenido cargado",
    idStage: "Stopped Loaded"
  },
  {
    ai: false,
    active: false,
    stageRow: 2,
    stagePosition: 8,
    iconName: "",
    name: "",
    idStage: ""
  },
  {
    ai: false,
    active: false,
    stageRow: 2,
    stagePosition: 9,
    iconName: "",
    name: "",
    idStage: ""
  },
  {
    ai: false,
    active: false,
    stageRow: 2,
    stagePosition: 10,
    iconName: "",
    name: "",
    idStage: ""
  }
];

export default stages;

// Traveling Empty → Viajando vacío
// Stopped Empty → Detenido vacío
// Loading → Cargando
// Fully Loaded → Completamente cargado
// Traveling Loaded → Viajando cargado
// Stopped Loaded → Detenido cargado
// Dumping → Descargando
