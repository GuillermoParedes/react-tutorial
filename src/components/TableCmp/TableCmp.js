import React, { Component } from "react";

import { Table, Alert, Button } from "reactstrap";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Acción</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.tareasDatos.map((row, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{row.nombre}</td>
        <td>
          <Button
            outline
            color="danger"
            onClick={() => props.borrarTarea(index)}
          >
            Borrar
          </Button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class TableCmp extends Component {
  render() {
    const { tareasDatos, borrarTarea } = this.props;

    if (tareasDatos !== undefined && tareasDatos.length > 0) {
      return (
        <Table>
          <TableHeader />
          <TableBody tareasDatos={tareasDatos} borrarTarea={borrarTarea} />
        </Table>
      );
    } else {
      return <Alert color="info">No existen tareas!</Alert>;
    }
  }
}

export default TableCmp;
