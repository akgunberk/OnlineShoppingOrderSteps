import React from "react";
import { Icon } from "semantic-ui-react";

function Logo(props) {
  const isVisa = props.isVisa;
  if (isVisa === 1) {
    return <Icon name={"cc visa"} />;
  }
  if (isVisa === 2) {
    return <Icon name={"cc mastercard"} />;
  } else {
    return null;
  }
}

export default Logo;
