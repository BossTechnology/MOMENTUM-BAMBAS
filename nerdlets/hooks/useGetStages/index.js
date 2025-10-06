// Hooks
import { useQuery } from "react-query";
import useStages from "../../context/stages/useStages";
import useGetHexagonLists from "../../context/stages/useGetHexagonLists";

// Utils
import getStages from "./getStages";
import transformHexagonLists from "./utils/transformHexagonLists";

// Constants
import queries from "../../data/queries";
import { ACCOUNT_ID } from "../../data/credentials";

const GET_STAGES = "get-stages";

/**
 * Callback for get stages
 */
export default function useGetStages() {
  const hexagonLists = useGetHexagonLists();
  const setHexagonLists = useStages((state) => state.setHexagonLists);

  const queryData = useQuery({
    queryKey: GET_STAGES,
    refetchOnWindowFocus: false,

    // Handle success response at get stages
    onSuccess: (apiResponse) => {
      const mock = [
        {
          row: 0,
          position: 3,
          total_kpi: 20,
          percentage: 80,
          risk_meter_value: 35,
          risk_meter_percentage: 65,
        },
      ];

      // Transform current hexagon lists based API response
      const newHexagonLists = transformHexagonLists({
        apiResponse: mock,
        hexagonLists: hexagonLists,
      });

      console.log({ newHexagonLists });

      // Set new hexagon lists
      setHexagonLists(newHexagonLists);
    },

    // Request for get stages
    queryFn: () => {
      return getStages({ accountId: ACCOUNT_ID, query: queries.pannelsData });
    },
  });

  return queryData;
}
