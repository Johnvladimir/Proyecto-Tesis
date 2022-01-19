import React from "react";

import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ color }) => color || "#070494"};
  text-decoration: none;
  border-radius: 100px;
  padding: 1rem 2rem;
  color: #fff;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-right: ${({ marginRight }) => marginRight && "8px"};
  cursor: pointer;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  :hover,
  :active,
  :focus {
    background: ${({ color }) => (color ? "#cd0606" : "#020142")};
    cursor: pointer;
  }
`;
