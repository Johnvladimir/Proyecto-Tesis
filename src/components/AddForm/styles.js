import React from "react";

import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Form = styled.form`
  display: flex;
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
  @media screen and (max-width: 720px) {
    margin-bottom: 20px;
  }
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Title = styled.p`
  font-size: 20px;
`;
