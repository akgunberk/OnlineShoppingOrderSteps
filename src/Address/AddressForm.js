import React, { Component } from "react";
/*import AddressCard from "./AddressCard";*/
import CountrySelect from "./CountrySelect";
import { Form, Checkbox, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";

class AddressForm extends Component {
  state = {
    addressType: "",
    open: "",
    show: "",
    name: "",
    surname: "",
    country: "",
    address: "",
    city: "",
    post: "",
    checkbox: false
  };

  /*handleChange = (e, { name, value }) => this.setState({ [name]: value });

   Add redux here and reach it from Tabs.js*/
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value.toUpperCase() });
  };
  handleCheck = (e, { name }) => {
    this.setState({ checkbox: !name });
  };

  render() {
    const { name, surname, city, address, post, checkbox } = this.state;
    const AddressOptions = [
      { key: "1", value: "Shipping", text: "Shipping" },
      { key: "2", value: "Billing", text: "Billing" }
    ];
    this.props.dispatch({ type: "NAME", state: this.state });

    return (
      <div>
        <Form />
        <Form className="input-fields">
          <Form.Field
            onChange={this.handleCheck}
            name={checkbox}
            control={Checkbox}
            label={{
              children: "Use this address for both shipping and billing"
            }}
          />
          <Form.Group style={{ display: "block" }}>
            <Form.Group unstackable widths={3}>
              <Form.Field width={"five"}>
                <Dropdown
                  style={{ textAlign: "center" }}
                  placeholder="Select Address Type"
                  compact
                  search
                  disabled={this.state.checkbox}
                  selection
                  clearable
                  options={AddressOptions}
                  name="addressType"
                  onChange={this.handleChange}
                />
              </Form.Field>

              <Form.Field width={"five"}>
                <Form.Input
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
              </Form.Field>

              <Form.Field width={"five"}>
                <Form.Input
                  placeholder="Surname"
                  name="surname"
                  value={surname}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form.Group>

            <Form.Group unstackable widths={3}>
              <Form.Field width={"five"}>
                <CountrySelect />
              </Form.Field>
              <Form.Field width={"five"}>
                <Form.Input
                  placeholder="City"
                  name="city"
                  value={city}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field width="five">
                <Form.Input
                  placeholder="Postal Code"
                  name="post"
                  value={post}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group unstackable widths={1}>
              <Form.Field width={"fifteen"}>
                <Form.Input
                  placeholder=" i.e.
                  1 N. El Dorado St.
                  Suite 2
                  Wilkes Barre, PA 18702"
                  name="address"
                  value={address}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form.Group>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    surname: state.name,
    address: state.address,
    city: state.city,
    post: state.post
  };
};

export default connect(mapStateToProps)(AddressForm);
