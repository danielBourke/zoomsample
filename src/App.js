import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
            path="/eventform"
            component={lazy(() => import("./Screens/CreateEventForm"))}
          />
             <Route
            exact
            path="/pastmeeting/:id"
            component={lazy(() => import("./Screens/CompletedEventScreen"))}
          />
          <Route
            exact
            path="/meeting/:id/:passcode"
            component={lazy(() => import("./Screens/Zoom"))}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
    </MuiPickersUtilsProvider>
  );
}

export default App;
