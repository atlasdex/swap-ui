import React, { lazy } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./routerHistory";

import GlobalStyle from "./style/Global";
import PageLoader from "./components/PageLoader";
import SuspenseWithChunkError from "./components/SuspenseWithChunkError";
// import Header from "components/Header";
import Web3ReactManager from "components/Web3ReactManager";
import { useFetchPublicData } from "state/hooks";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "components/Navbar";

// const Home = lazy(() => import("./views/Home"));
const Swap = lazy(() => import("./views/Swap"));
const Pools = lazy(() => import("./views/Pools"));
const Bridge = lazy(() => import("./views/Bridge"));

const App: React.FC = () => {
  useFetchPublicData();

  return (
    <Router history={history}>
      <GlobalStyle />
      <SuspenseWithChunkError fallback={<PageLoader />}>
        {/* <Header /> */}
        <Navbar />

        <Web3ReactManager>
          <Switch>
            <Route path="/" exact>
              <Swap />
            </Route>
            <Route path="/pools" exact>
              <Pools />
            </Route>
            <Route path="/bridge" exact>
              <Bridge />
            </Route>
          </Switch>
        </Web3ReactManager>
      </SuspenseWithChunkError>
    </Router>
  );
};

export default App;
