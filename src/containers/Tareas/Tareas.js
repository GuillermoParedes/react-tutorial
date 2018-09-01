import React, { Component } from "react";
import TareasForm from "./../../forms/TareasForm";
import { TableCmp } from "./../../components";
import TareasApi from "./../../services/tareas.service";

class Tareas extends Component {
  state = {
    tareas: []
  };
  async componentWillMount() {
    setTimeout(() => {
      this.setState({
        tareas: TareasApi
      });
    }, 7000);
  }
  numeroAleatorio = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };
  borrarTarea = index => {
    const { tareas } = this.state;

    this.setState({
      tareas: tareas.filter((tarea, i) => {
        return i !== index;
      })
    });
  };
  agregarTarea = tarea => {
    this.setState({
      tareas: [
        ...this.state.tareas,
        { nombre: tarea.tareaNueva, id: this.numeroAleatorio(1, 100) }
      ]
    });
  };
  render() {
    const { tareas } = this.state;
    return (
      <div className="container">
        <br />
        <TareasForm agregarTarea={this.agregarTarea} />
        <br />
        <br />
        <TableCmp tareasDatos={tareas} borrarTarea={this.borrarTarea} />
      </div>
    );
  }
}

export default Tareas;
