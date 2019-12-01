import React from "react";
import { Input } from "semantic-ui-react";
import { connect } from "react-redux";

class CardName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " "
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.props.dispatch({ type: "NAME", name: e.target.value.toUpperCase() });
  };

  render() {
    return (
      <div style={{ width: "200px" }}>
        Card Name and Surname
        <Input
          className="Card-Name"
          style={{ width: "200px" }}
          fluid
          onChange={e => {
            this.handleChange(e);
          }}
        >
          <input
            id={"Card-Name"}
            style={{ textAlign: "left" }}
            maxLength="25"
          />
        </Input>
      </div>
    );
  }
}

const mapPropsToState = state => {
  if (state.CardName !== undefined) {
    document.getElementById("Card-Name").value = state.CardName;
  }
  return {
    CardName: state.name
  };
};

export default connect(mapPropsToState)(CardName);
