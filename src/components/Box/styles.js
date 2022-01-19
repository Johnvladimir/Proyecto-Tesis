import React from "react";

import styled from "styled-components";

export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: ${({ txtAlgn }) => txtAlgn || "center"};
    margin 0 auto;
    margin-bottom: ${({ marginBottom }) => marginBottom || 0};
    padding: 100px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    @media screen and (max-width: 1024px) {
        padding: 60px;
    }
`;
export const Text = styled.p`
  font-size: 36px;
  max-width: 600px;
  margin-bottom: 60px;
  @media screen and (max-width: 720px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
`;
