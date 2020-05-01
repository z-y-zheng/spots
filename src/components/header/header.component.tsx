import React, { Component } from "react";

import {
  HeaderOptionsWrapper,
  IndividualOptions,
  MenuLink,
} from "./header.styles";

const menuOptions = ["SPOTS", "CREATE", "GALLERY", "ABOUT", "PROFILE", "LOGIN"];

class Header extends Component {
  render() {
    return (
      <HeaderOptionsWrapper>
        {menuOptions.map((option, index) => {
          return (
            <IndividualOptions key={`${option}-${index}`}>
              <MenuLink href="">{option}</MenuLink>
            </IndividualOptions>
          );
        })}
      </HeaderOptionsWrapper>
    );
  }
}

export default Header;
