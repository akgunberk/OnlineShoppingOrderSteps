import React from "react";
import {
  Card,
  CardContent,
  Grid,
  GridColumn,
  Icon,
  Popup
} from "semantic-ui-react";
import CardNumber from "./CardNumber";
import CardName from "./CardName";
import DateSecurity from "./DateSecurity";
import Visual from "./CardVisual";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./cardStyle.css";

function reducer(state, action) {
  if (state === undefined) {
    return NaN;
  }
  switch (action.type) {
    case "NUMBER":
      return {
        ...state,
        CardNumber: action.number
      };
    case "NAME":
      return {
        ...state,
        CardName: action.name
      };
    case "SECURITY":
      return {
        ...state,
        CardSecurity: action.security
      };

    default:
      return state;
  }
}
const store = createStore(reducer);
store.dispatch({ type: "NUMBER" });
store.dispatch({ type: "NAME" });
store.dispatch({ type: "SECURITY" });

function CreditCard() {
  return (
    <Provider store={store}>
      <div className="App1">
        <div style={{ marginLeft: "25px" }} className="Cards">
          <Card
            style={{ paddingLeft: "25px", border: "none" }}
            className="Card-Info"
            fluid
          >
            <Grid columns={2} divided={"vertically"}>
              <GridColumn verticalAlign={"middle"}>
                <CardContent style={{ paddingBottom: "20px" }}>
                  <div>
                    <CardNumber />
                  </div>
                </CardContent>

                <CardContent style={{ paddingBottom: "20px" }}>
                  <div>
                    <CardName />
                  </div>
                </CardContent>

                <CardContent
                  className="Date-Code"
                  style={{ paddingBottom: "20px" }}
                >
                  <div className="Descr">
                    <span>Expiration Date</span>
                    <span>
                      Security Number
                      {
                        <Popup
                          content={
                            "3-digit-number placed backside of the card."
                          }
                          trigger={
                            <Icon
                              style={{ marginLeft: "5px" }}
                              id={"info"}
                              name={"info circle"}
                              basic
                            />
                          }
                        />
                      }
                    </span>
                    <br />
                  </div>

                  <div className="Date-inputs">
                    <DateSecurity />
                  </div>
                </CardContent>
              </GridColumn>

              <GridColumn
                textAlign="center"
                verticalAlign={"middle"}
                className="visual"
              >
                <Visual />
              </GridColumn>
            </Grid>
          </Card>
        </div>
      </div>
    </Provider>
  );
}

export default CreditCard;
