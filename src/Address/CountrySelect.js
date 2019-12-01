import React from "react";
import { Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";

const countryOptions = [
  { key: "tr", value: "Turkey", flag: "tr", text: "Turkey" },
  { key: "af", value: "Afghanistan", flag: "af", text: "Afghanistan" },
  { key: "ax", value: "Aland Islands", flag: "ax", text: "Aland Islands" },
  { key: "al", value: "Albania", flag: "al", text: "Albania" },
  { key: "dz", value: "Algeria", flag: "dz", text: "Algeria" },
  { key: "as", value: "American Samoa", flag: "as", text: "American Samoa" },
  { key: "by", value: "Belarus", flag: "by", text: "Belarus" },
  { key: "be", value: "Belgium", flag: "be", text: "Belgium" },
  { key: "bz", value: "Belize", flag: "bz", text: "Belize" },
  { key: "bj", value: "Benin", flag: "bj", text: "Benin" }
];

class CountrySelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e, { value }) => {
    e.preventDefault();
    this.props.dispatch({ type: "COUNTRY", country: value });
  };

  render() {
    return (
      <Dropdown
        style={{ textAlign: "center" }}
        placeholder="Select Country"
        compact
        search
        selection
        clearable
        options={countryOptions}
        name="country"
        onChange={this.handleChange}
      />
    );
  }
}

export default connect(null)(CountrySelection);
