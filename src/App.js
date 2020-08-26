import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashboardLayout from "./Layout/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback="">
        <Switch>
          <DashboardLayout>
          <Route exact
           path="/"
           component={lazy(() => import("./Screens/HomeScreen"))}
            />
</DashboardLayout>
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
