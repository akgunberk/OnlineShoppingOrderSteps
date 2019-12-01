import React from "react";
import { Input } from "semantic-ui-react";
import { connect } from "react-redux";
class CardNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number:
        "_ _ _ _" +
        "\xa0\xa0\xa0\xa0" +
        "_ _ _ _" +
        "\xa0\xa0\xa0\xa0" +
        "_ _ _ _" +
        "\xa0\xa0\xa0\xa0" +
        "_ _ _ _"
    };
  }

  handleChange = e => {
    this.props.dispatch({ type: "NUMBER", number: e.target.value });
  };

  render() {
    return (
      <div style={{ width: "200px" }}>
        Card Number
        <Input
          id="inp"
          className="Card-Number"
          fluid
          placeholder={this.state.number}
          onChange={e => {
            this.handleChange(e);
          }}
        >
          <input style={{ textAlign: "center" }} maxLength="16" />
        </Input>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    card: state.number
  };
};

export default connect(mapStateToProps)(CardNumber);
