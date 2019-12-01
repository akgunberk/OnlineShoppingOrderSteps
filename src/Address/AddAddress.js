import React from "react";
import { Form, Button, Modal, Icon, Confirm, Header } from "semantic-ui-react";
import AddressForm from "./AddressForm";
import { connect } from "react-redux";

class AddAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, show: false, print: false };
  }

  render() {
    this.props.dispatch({ type: "PRINT", print: this.state.print });

    return (
      <Modal
        closeIcon
        open={this.state.open}
        onClose={() => {
          this.setState({ open: false });
        }}
        trigger={
          <Button
            onClick={() => {
              this.setState({ open: true });
              this.setState({ print: false });
            }}
            icon
            labelPosition="right"
          >
            Add Address
            <Icon name="add" />
          </Button>
        }
      >
        <Header icon="truck" content="Address" />
        <Modal.Content>
          <AddressForm />
          <Form.Button
            onClick={() => this.setState({ show: true })}
            content="Add"
          >
            Save Adress
          </Form.Button>
          <Confirm
            open={this.state.show}
            onCancel={() => {
              this.setState({ show: false });
            }}
            onConfirm={() => {
              this.setState({ show: false });
              this.setState({ open: false });
              this.setState({ print: true });
            }}
          />
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    print: state.print
  };
};

export default connect(mapStateToProps)(AddAddress);
