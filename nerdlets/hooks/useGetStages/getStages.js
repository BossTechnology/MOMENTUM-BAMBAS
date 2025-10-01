// Librarys
import { NerdGraphQuery } from "nr1";

// Utils
import createValidArray from "../../utils/createValidArray";

/**
 * Callback for get stages
 * @param {object} params Params
 */
export default async function getStages(params) {
  try {
    // Create query
    const query = `
      query($accountId: Int!) {
        actor {
          account(id: $accountId) {
            nrql(query: "${params?.query}") {
              results
            }
          }
        }
      }
    `;

    // Get query response
    const queryResp = await NerdGraphQuery.query({
      query: query,
      variables: { accountId: params?.accountId },
    });

    // Get query results
    const results = queryResp?.data?.actor?.account?.nrql?.results;
    return createValidArray(results);
  } catch (error) {
    console.error("Error at get stages:", { error });
    throw error;
  }
}
