// Librarys
import { create } from "zustand";

// Utils
import isValidArray from "../../utils/isValidArray";
import isValidObject from "../../utils/isValidObject";

// Constants
import stageLists from "../../data/journey";

const useStages = create((set) => ({
  selectedStage: {},
  stageLists: stageLists,

  // Callback for select specific stage
  selectStage: (stage) => {
    // Validate 'stage' param
    if (!isValidObject(stage)) return;

    return set((state) => ({
      ...state,
      selectedStage: stage,
    }));
  },

  // Callback for set stage lists
  setStageLists: (newStageLists) => {
    // Validate 'newStageLists' param
    if (!isValidArray(newStageLists)) return;

    return set((state) => ({
      ...state,
      stageLists: newStageLists,
    }));
  },
}));

export default useStages;
