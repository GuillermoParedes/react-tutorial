import React, { Component } from "react";
import { Header } from "./components";
import { Tareas } from "./containers";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Tareas />
      </div>
    );
  }
}

export default App;
