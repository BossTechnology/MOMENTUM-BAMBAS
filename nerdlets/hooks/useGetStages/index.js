// Hooks
import { useQuery } from "react-query";

// Utils
import getStages from "./getStages";

// Constants
import queries from "../../data/queries";
import { ACCOUNT_ID } from "../../data/credentials";

const GET_STAGES = "get-stages";

/**
 * Callback for get stages
 */
export default function useGetStages() {
  const queryData = useQuery({
    queryKey: GET_STAGES,
    refetchOnWindowFocus: false,

    // Handle success response at get stages
    onSuccess: (apiResponse) => {
      console.log({ apiResponse });
    },

    // Request for get stages
    queryFn: () => {
      return getStages({ accountId: ACCOUNT_ID, query: queries.pannelsData });
    },
  });

  return queryData;
}
