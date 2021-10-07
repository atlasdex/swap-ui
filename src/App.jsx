import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pools from "./pages/Pools";
import "./App.css";

// fonts
import "./assets/fonts/SegoeUI/style.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/pools" exact component={Pools} />
      </Router>
    </>
  );
}

export default App;
