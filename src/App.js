import React, { Component } from "react";
import { Header } from "./components";
// import { Tareas } from "./containers";
import { Contacts } from "./containers";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Tareas /> */}
        <Contacts title="Profiles" />
      </div>
    );
  }
}

export default App;
