import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <title>SPOTS</title>
        </header>
        <Header />
      </div>
    </Router>
  );
}

export default App;
