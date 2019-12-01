import React from "react";
import { Header, Segment, Grid, Icon } from "semantic-ui-react";
import AddressCard from "./Address/AddressCard";
import { connect } from "react-redux";

class SegmentExamplePlaceholder extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header
          icon="shipping fast"
          content="Your order will be shipped the address below"
        />
        <Grid columns={2} divided="vertically" stretched>
          <Grid.Column>
            <Segment placeholder>
              {this.props.print === true ? (
                <div>
                  <span>Here is your order details.</span>

                  <AddressCard
                    name={this.props.all.name}
                    surname={this.props.all.surname}
                    city={this.props.all.city}
                    address={this.props.all.address}
                    post={this.props.all.post}
                    addressType={this.props.all.addressType + " ADDRESS"}
                  />
                </div>
              ) : (
                <h1>Please add your address</h1>
              )}
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment placeholder>
              <Header icon>
                <Icon name="shopping basket" />
                There is no item in your basket.
              </Header>
            </Segment>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    all: state.all,
    print: state.print
  };
};
export default connect(mapStateToProps)(SegmentExamplePlaceholder);
