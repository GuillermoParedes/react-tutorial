import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const CardContact = props => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardSubtitle>{props.email}</CardSubtitle>
        <CardText>{props.message}</CardText>
        <Button
          color="primary"
          onClick={event => {
            event.preventDefault();
            props.editData(props);
          }}
        >
          Editar
        </Button>
        <Button
          color="danger"
          onClick={event => {
            event.preventDefault();
            props.deleteData(props);
          }}
        >
          Eliminar
        </Button>
      </CardBody>
    </Card>
  );
};

export default CardContact;
