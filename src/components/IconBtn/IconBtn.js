import React from "react";
import { IconBtnWrapper } from "./styles";

const IconBtn = ({ icon, onClick }) => {
  return (
    <IconBtnWrapper onClick={onClick}>
      <img src={icon} alt="img"/>
    </IconBtnWrapper>
  );
};

export default IconBtn;
