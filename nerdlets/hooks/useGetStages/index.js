// Hooks
import { useQuery } from "react-query";
import useStages from "../../context/stages/useStages";
import useGetStageLists from "../../context/stages/useGetStageLists";

// Utils
import getStages from "./getStages";
import transformStageLists from "./utils/transformStageLists";

// Constants
import queries from "../../data/queries";
import { ACCOUNT_ID } from "../../data/credentials";

const GET_STAGES = "get-stages";

/**
 * Callback for get stages
 */
export default function useGetStages() {
  const stageLists = useGetStageLists();
  const setStageLists = useStages((state) => state.setStageLists);

  const queryData = useQuery({
    queryKey: GET_STAGES,
    refetchOnWindowFocus: false,

    // Handle success response at get stages
    onSuccess: (apiResponse) => {
      const mock = [
        {
          row: 0,
          position: 3,
          total_performanceIndicator: 20,
          percentage: 80,
          risk_meter_value: 35,
          risk_meter_percentage: 65,
        },
      ];

      // Transform current stage lists based API response
      const newStageLists = transformStageLists({
        apiResponse: mock,
        stageLists: stageLists,
      });

      // Set new stage lists
      setStageLists(newStageLists);
    },

    // Request for get stages
    queryFn: () => {
      return getStages({ accountId: ACCOUNT_ID, query: queries.pannelsData });
    },
  });

  return queryData;
}
