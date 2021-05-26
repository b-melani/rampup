import { RelayEnvironmentProvider } from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import BrowserRouter from "./Routes";

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <div>
        <BrowserRouter />
      </div>
    </RelayEnvironmentProvider>
  );
}

export default App;
