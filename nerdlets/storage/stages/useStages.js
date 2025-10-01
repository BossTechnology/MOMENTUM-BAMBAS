// Librarys
import { create } from "zustand";

// Utils
import isValidString from "../../utils/isValidString";
import isValidObject from "../../utils/isValidObject";
import createValidObject from "../../utils/createValidObject";

// Constants
import { stages } from "./constants";

const useStages = create((set) => ({
  stages: stages,
  selectedHexagon: {},

  // Callback for select specific hexagon
  selectHexagon: (hexagon) => {
    // Validate 'hexagon' param
    if (!isValidObject(hexagon)) return;

    return set((state) => ({
      ...state,
      selectedHexagon: hexagon,
    }));
  },

  // Callback for update specific stage
  updateStage: (params) => {
    const { stageId, stageData } = createValidObject(params);

    // Validate params
    if (!isValidString(stageId) || !isValidObject(stageData)) return;

    return set((state) => ({
      ...state,

      stages: {
        ...state.stages,
        [stageId]: { ...state[stageId], ...stageData },
      },
    }));
  },
}));

export default useStages;
