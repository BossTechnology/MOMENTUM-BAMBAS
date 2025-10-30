import { useQuery } from "@tanstack/react-query";
import { NerdGraphQuery } from "nr1";

// Execute NRQL via NerdGraph and return results[]

async function runNrql(accountId, nrql) {
  const gql = `
    query($accountId:Int!) {
      actor {
        account(id: $accountId) {
          nrql(query: "${nrql}") { results }
        }
      }
    }
  `;
  const resp = await NerdGraphQuery.query({ query: gql, variables: { accountId } });
  return resp?.data?.actor?.account?.nrql?.results ?? [];
}

// React Query wrapper for NerdGraph NRQL

export function useNerdGraphQuery({ accountId, query, refetchInterval = 60_000, enabled = true }) {
  return useQuery({
    queryKey: ["nrql", accountId, query],
    queryFn: () => runNrql(accountId, query),
    refetchInterval,
    staleTime: refetchInterval,
    enabled
  });
}
