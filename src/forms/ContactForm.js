import React from "react";
import { Button, InputGroup, InputGroupAddon, Input } from "reactstrap";
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      email: this.props.email,
      message: this.props.message
    };
  }

  /**
   * @description Se ejecuta cuando todo mi componente ya fue renderizado, en el DOM
   */
  componentDidMount() {
    console.log("COmponent di mound");
  }

  /**
   * @description Se ejecuta cuando se detecta que tiene nuevas propiedades, recomendable para cambiar de estado
   */
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
    this.setState({ ...nextProps.data });
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.name === nextProps.name;
  // }
  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps", props, state);
  //   return false;
  // }

  handleClick = event => {
    event.preventDefault();
    this.props.sendParams &&
      this.props.sendParams({
        ...this.state
      });
    this.setState({
      id: "",
      name: "",
      email: "",
      message: ""
    });
  };

  handleChange = event => {
    const { target } = event;
    const value = target.value;
    const { name } = target;

    this.setState({
      [name]: value.toUpperCase()
    });
  };

  render() {
    console.log("render Contact Form", this.state);
    return (
      <section>
        <InputGroup>
          <Input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            placeholder="Your Name"
            onChange={e => this.handleChange(e)}
          />
        </InputGroup>
        <br />
        <InputGroup>
          <Input
            type="text"
            name="email"
            id="email"
            value={this.state.email}
            placeholder="Your E-mail"
            onChange={e => this.handleChange(e)}
          />
        </InputGroup>
        <br />
        <InputGroup>
          <Input
            type="textarea"
            name="message"
            id="message"
            value={this.state.message}
            placeholder="Your Message"
            onChange={e => this.handleChange(e)}
          />
        </InputGroup>
        <br />
        <Button onClick={event => this.handleClick(event)}>Guardar</Button>
      </section>
    );
  }
}

ContactForm.defaultProps = {
  id: null,
  name: "",
  email: "",
  message: ""
};

export default ContactForm;
