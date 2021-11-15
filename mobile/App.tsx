import React from "react";
import { Provider } from "react-redux";
import Routes from "./src/routes/Routes";
import ReduxStore from "./src/store/ReduxStore";

const App = () => {
  return (
    <Provider store={ReduxStore}>
      <Routes />
    </Provider>
  );
};

export default App;
