import React, { Component } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

class TareasForm extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      tareaNueva: ""
    };
    this.state = this.initialState;
  }
  handleChange = event => {
    const { target } = event;
    const value = target.value;
    const { name } = target;

    this.setState({
      [name]: value
    });
  };
  submitForm(e) {
    e.preventDefault();
    this.props.agregarTarea(this.state);
    this.setState(this.initialState);
  }
  render() {
    return (
      <Form onSubmit={e => this.submitForm(e)}>
        <FormGroup>
          <Input
            type="text"
            name="tareaNueva"
            id="tareaNueva"
            value={this.state.tareaNueva}
            placeholder="Nueva tarea"
            onChange={e => this.handleChange(e)}
          />
        </FormGroup>
        <Button className="float-right" color="success">
          Agregar Tarea
        </Button>
      </Form>
    );
  }
}

export default TareasForm;
