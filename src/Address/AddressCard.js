import React from "react";
import { Card } from "semantic-ui-react";

export default class AddressCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <Card>
          <Card.Content>
            <Card.Header>{this.props.addressType}</Card.Header>
            <hr />
            <Card.Meta>
              Please Check Your Address Information Below.In Case of Change, Add
              Again.
            </Card.Meta>
            <Card.Description>
              <div>
                City: {this.props.country} - {this.props.city}
              </div>
              <div>Name: {this.props.name}</div>
              <div>Surname: {this.props.surname}</div>
              <div>Address:{this.props.address}</div>
              <div>Postal Code: {this.props.post}</div>
            </Card.Description>
          </Card.Content>
          <Card.Content extra />
        </Card>
      </React.Fragment>
    );
  }
}
