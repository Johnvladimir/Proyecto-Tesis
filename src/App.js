import React from "react";

import Help from "./pages/Help";
import Home from "./pages/Home";

import { Route } from "wouter";

import { GlobalStyle } from "./styles/globalStyles";
import About from "./pages/About";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/help" component={Help} />
    </React.Fragment>
  );
};

export default App;
