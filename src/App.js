import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashboardLayout from "./Layout/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback="">
        <Switch>
          <Route
            exact
            path="/"
            component={lazy(() => import("./Screens/HomeScreen"))}
          />
          <Route
            exact
            path="/meeting/:id/:passcode"
            component={lazy(() => import("./Screens/Zoom"))}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
