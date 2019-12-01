import React from "react";
import { Input, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";

const optionsMonth = [
  { key: 1, text: "1", value: "1" },
  { key: 2, text: "2", value: "2" },
  { key: 3, text: "3", value: "3" },
  { key: 4, text: "4", value: "4" },
  { key: 5, text: "5", value: "5" },
  { key: 6, text: "6", value: "6" },
  { key: 7, text: "7", value: "7" },
  { key: 8, text: "8", value: "8" },
  { key: 9, text: "9", value: "9" },
  { key: 10, text: "10", value: "10" },
  { key: 11, text: "11", value: "11" },
  { key: 12, text: "12", value: "12" }
];

const optionsYear = [
  { key: 1, text: "2019", value: 2019 },
  { key: 2, text: "2020", value: 2020 },
  { key: 3, text: "2021", value: 2021 },
  { key: 4, text: "2022", value: 2022 },
  { key: 5, text: "2023", value: 2023 }
];

class DateSecurity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      security: " ",
      month: " ",
      year: " "
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e, type) => {
    switch (type) {
      case "Ay":
        this.props.dispatch({
          type: "SECURITY",
          security: { ...this.state, month: e.target.innerText }
        });
        break;

      case "Yil":
        this.props.dispatch({
          type: "SECURITY",
          security: { ...this.state, year: e.target.innerText }
        });
        break;
      case "Security":
        this.props.dispatch({
          type: "SECURITY",
          security: { ...this.state, security: e.target.value }
        });
        break;
      default:
        console.log("Done.");
    }
  };

  render() {
    return (
      <div>
        <Dropdown
          button
          basic
          floating
          options={optionsMonth}
          placeholder={"Month"}
          onChange={e => {
            this.setState({ ...this.state, month: e.target.innerText });
            this.handleChange(e, "Ay");
          }}
        />

        <Dropdown
          button
          basic
          floating
          options={optionsYear}
          placeholder={"Year"}
          onChange={e => {
            this.setState({ ...this.state, year: e.target.innerText });
            this.handleChange(e, "Yil");
          }}
        />

        <Input
          className="Card-Security"
          placeholder={"_ _ _"}
          onChange={e => {
            this.setState({ ...this.state, security: e.target.value });
            this.handleChange(e, "Security");
          }}
        >
          <input style={{ textAlign: "center" }} maxLength={"3"} />
        </Input>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    month: state.month,
    year: state.year,
    security: state.security
  };
};

export default connect(mapStateToProps)(DateSecurity);
