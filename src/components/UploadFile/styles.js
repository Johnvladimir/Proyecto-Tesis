import React from "react";

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 80px 0;
`;

export const Text = styled.p`
  font-size: 36px;
  max-width: 600px;
  @media screen and (max-width: 720px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
`;

/**
 * 
 * background-color: ${({ color }) => color || "#070494"};
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
 */

export const InputFileWrapper = styled.div`
  background: #070494;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  color: #fff;
  font-size: 1em;
  margin: 1.25em 0; /*20px/16px 0*/
  overflow: hidden;
  padding: 1rem 2rem; /*14px/16px*/
  position: relative;
  text-align: center;
  cursor: pointer;
  :hover,
  :active,
  :focus {
    background: #020142;
    cursor: pointer;
  }
`;

export const InputFile = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0);
  width: 148px;
  height: 46px;
  cursor: pointer;
`;
