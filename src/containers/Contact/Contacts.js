import React from "react";
import ContactForm from "./../../forms/ContactForm";
import CardContact from "../../components/CardContact/CardContact";
import { Container, Row, Col } from "reactstrap";
export default class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      form: {
        id: "",
        name: "",
        email: "",
        message: ""
      }
    };
  }
  numeroAleatorio = (min = 0, max = 1000) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  sendParamsParent = data => {
    console.log("sendParamsParaent", data);
    if (data.id) {
      const newProfiles = this.state.profiles.map(profile => {
        if (profile.id === data.id) {
          return data;
        } else {
          return profile;
        }
      });

      this.setState({
        profiles: newProfiles,
        form: {
          id: null,
          name: "",
          email: "",
          message: ""
        }
      });
    } else {
      this.setState({
        profiles: [
          ...this.state.profiles,
          { ...data, id: this.numeroAleatorio() }
        ],
        form: {
          id: null,
          name: "",
          email: "",
          message: ""
        }
      });
    }
  };
  editDataParent = data => {
    console.log("editDataParent", data);
    this.setState({
      form: {
        id: data.id,
        name: data.name,
        email: data.email,
        message: data.message
      }
    });
  };
  deleteDataparent = data => {
    const newProfiles = this.state.profiles.filter(
      profile => profile.id !== data.id
    );

    this.setState({ profiles: newProfiles });
  };
  renderProfiles = () => {
    return this.state.profiles.map(profile => {
      console.log("profile", profile);
      return (
        <Col size={{ sm: 4, xs: 6 }} key={profile.id}>
          <CardContact
            {...profile}
            editData={this.editDataParent}
            deleteData={this.deleteDataparent}
          />
        </Col>
      );
    });
  };

  render() {
    return (
      <Container>
        <h2 className="text-center text-secondary">{this.props.title}</h2>
        <Row>
          <Col sm={{ size: 9, offset: 2 }}>
            <ContactForm
              data={this.state.form}
              sendParams={this.sendParamsParent}
              className="m-10"
            />
          </Col>
        </Row>
        <br />
        <Row>{this.renderProfiles()}</Row>
      </Container>
    );
  }
}
