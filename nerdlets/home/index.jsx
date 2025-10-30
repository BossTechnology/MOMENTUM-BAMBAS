// Librarys
import { nerdlet } from "nr1";
import { QueryClient, QueryClientProvider } from "react-query";
import TestApi from "./TestApi";
// Containers
import AppContainer from "../containers/AppContainer";

const queryClient = new QueryClient();

// Hide Time Picker from app
nerdlet.setConfig({
  timePicker: false
});

export default function MomentumBambasApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer />;
    </QueryClientProvider>
  );
}

// export default function MomentumBambasApp() {
//   return (
//     // <QueryClientProvider client={queryClient}>
//     <TestApi />
//     // </QueryClientProvider>
//   );
// }
