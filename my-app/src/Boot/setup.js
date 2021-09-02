import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import configureStore from "./configureStore";
import AppNavigator from "../Navigation";

const { store, history } = configureStore();

function App() {
  return (
    <FirebaseDatabaseProvider>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <AppNavigator />
          </div>
        </ConnectedRouter>
      </Provider>
    </FirebaseDatabaseProvider>
  );
}

export default App;
