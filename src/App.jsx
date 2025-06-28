import NotFound from "components/commons/NotFound";
import MainPage from "components/MainPage";
import { Switch, Route } from "react-router-dom";
import routes from "routes";

import "./App.css";

// eslint-disable-next-line import/extensions

const App = () => (
  <div className="app bg-gray-100">
    <Switch>
      <Route exact component={MainPage} path={routes.root} />
      <Route exact component={NotFound} path="*" />
    </Switch>
  </div>
);

export default App;
