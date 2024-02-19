import { ToastContainer } from "react-toastify";
import "./App.css";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "react-loading-skeleton/dist/skeleton.css";
import useBreakpoint from "./utilities/mediaQuery";
import { breakingPoints } from "./global/theme";

function App() {
  const isSmallScreen = useBreakpoint(breakingPoints.sm);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
        <ToastContainer
          style={{ marginTop: isSmallScreen ? "50px" : "100px" }}
        />
      </PersistGate>
    </Provider>
  );
}

export default App;
