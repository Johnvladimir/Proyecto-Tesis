import React from "react";
import { Button } from "../../styles/common";
import { BoxContainer, Text } from "./styles";

const Box = ({ children, txtAlgn, marginBottom }) => {
  return (
    <BoxContainer txtAlgn={txtAlgn} marginBottom={marginBottom}>
      {children}
    </BoxContainer>
  );
};

export default Box;
