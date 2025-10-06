// Librarys
import { create } from "zustand";

// Utils
import isValidArray from "../../utils/isValidArray";
import isValidObject from "../../utils/isValidObject";

// Constants
import hexagonLists from "./data/hexagon-lists";

const useStages = create((set) => ({
  selectedHexagon: {},
  hexagonLists: hexagonLists,

  // Callback for select specific hexagon
  selectHexagon: (hexagon) => {
    // Validate 'hexagon' param
    if (!isValidObject(hexagon)) return;

    return set((state) => ({
      ...state,
      selectedHexagon: hexagon,
    }));
  },

  // Callback for set hexagons lists
  setHexagonLists: (newHexagonLists) => {
    // Validate 'newHexagonLists' param
    if (!isValidArray(newHexagonLists)) return;

    return set((state) => ({
      ...state,
      hexagonLists: newHexagonLists,
    }));
  },
}));

export default useStages;
