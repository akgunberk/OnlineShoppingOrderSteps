import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Tab, Button, Icon, Menu, Progress } from "semantic-ui-react";
import AddAddress from "./Address/AddAddress";
import AddressCard from "./Address/AddressCard";
import CreditCard from "./Card/Card";
import ShoppingBag from "./ShoppingBag";
import { createStore } from "redux";
import { Provider, ReactReduxContext } from "react-redux";

function reducer(state, action) {
  if (state === undefined) {
    return NaN;
  }
  switch (action.type) {
    case "NAME":
      return {
        ...state,
        all: action.state
      };
    case "COUNTRY":
      return {
        ...state,
        country: action.country
      };
    case "PRINT":
      return {
        ...state,
        print: action.print
      };

    default:
      return state;
  }
}
const store = createStore(reducer);
store.dispatch({ type: "NAME" });
store.dispatch({ type: "PRINT" });
store.dispatch({ type: "COUNTRY" });

const panes = [
  {
    menuItem: (
      <Menu.Item name="Shipping">
        <Icon name="truck" />
        Shipping
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane>
        <AddAddress />
        <span style={{ display: "flex", justifyContent: "space-between" }}>
          <div id="both" />
          <div style={{ marginLeft: "50px" }} id="shipping" />
          <div id="billing" />
        </span>
      </Tab.Pane>
    )
  },
  {
    menuItem: (
      <Menu.Item name="Billing">
        <Icon name="payment" />
        Billing
      </Menu.Item>
    ),
    render: () => (
      <Tab.Pane>
        <CreditCard />
      </Tab.Pane>
    )
  },
  {
    menuItem: (
      <Menu.Item name="Shipping">
        <Icon name="info" />
        Confirm Order
      </Menu.Item>
    ),
    render: () => <Tab.Pane>{<ShoppingBag />}</Tab.Pane>
  }
];

function Tabs() {
  const [index, setIndex] = useState(0);
  const [percent, setPercent] = useState(33);

  return (
    <Provider store={store}>
      <div>
        <ReactReduxContext.Consumer>
          {({ store }) => {
            store.subscribe(() => {
              //console.log(store.getState());
              if (store.getState().print) {
                const {
                  addressType,
                  name,
                  surname,
                  city,
                  address,
                  post
                } = store.getState().all;
                const country = store.getState().country;

                const ship = document.getElementById("shipping");
                const bill = document.getElementById("billing");
                const both = document.getElementById("both");

                if (addressType === "SHIPPING") {
                  ReactDOM.render(
                    <AddressCard
                      name={name}
                      surname={surname}
                      country={country}
                      city={city}
                      address={address}
                      post={post}
                      addressType={addressType + " ADDRESS"}
                    />,
                    ship
                  );
                }
                if (addressType === "BILLING") {
                  ReactDOM.render(
                    <AddressCard
                      name={name}
                      surname={surname}
                      country={country}
                      city={city}
                      address={address}
                      post={post}
                      addressType={addressType + " ADDRESS"}
                    />,
                    bill
                  );
                }
                if (addressType === "") {
                  ReactDOM.render(
                    <AddressCard
                      name={name}
                      surname={surname}
                      country={country}
                      city={city}
                      address={address}
                      post={post}
                      addressType={"ADDRESS"}
                    />,
                    both
                  );
                }
              }
            });
          }}
        </ReactReduxContext.Consumer>
        <Tab
          panes={panes}
          grid={{ paneWidth: 20, tabWidth: 20 }}
          activeIndex={index}
        />

        <Button
          style={{ marginTop: "10px" }}
          floated={"right"}
          onClick={() => {
            setIndex(index < 2 ? index + 1 : index);
            setPercent(percent < 60 ? percent + 33 : percent + 34);
          }}
        >
          <Icon name="arrow alternate circle right" />
        </Button>
        <Button
          style={{ marginTop: "10px" }}
          floated={"left"}
          onClick={() => {
            setIndex(index > 0 ? index - 1 : index);
            setPercent(percent > 65 ? percent - 34 : percent - 33);
          }}
        >
          <Icon name="arrow alternate circle left" />
        </Button>

        <Progress style={{ marginTop: "60px" }} percent={percent} indicating />
        {percent === 100 ? (
          <Button
            floated={"right"}
            onClick={() => document.location.reload(true)}
          >
            Place your order!
          </Button>
        ) : null}
      </div>
    </Provider>
  );
}

export default Tabs;
