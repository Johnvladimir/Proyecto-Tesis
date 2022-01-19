import React from "react";
import styled from "styled-components";

export const Title = styled.p`
  font-size: 24px;
`;

export const TableContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 56px;
  flex-direction: column;
  /*width: 75%;*/
  box-shadow: 0 0 10px rgb(0 0 0 / 2%);
`;

export const TableWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow-x: auto;
  white-space: nowrap;
  background-color: #fff;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 20px;
`;

export const TableUI = styled.table`
  border-radius: 10px;
`;

export const THead = styled.thead`
  width: 100%;
  background-color: #e1e8f2;
`;
