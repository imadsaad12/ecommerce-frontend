import { ToastContainer } from "react-toastify";
import "./App.css";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;
