import React from "react";
import { BoxContainer } from "./styles";

const Box = ({ children, txtAlgn, marginBottom }) => {
  return (
    <BoxContainer txtAlgn={txtAlgn} marginBottom={marginBottom}>
      {children}
    </BoxContainer>
  );
};

export default Box;
