import React from "react";

import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-right: 46px;
  @media screen and (max-width: 900px) {
    margin-right: 0;
    margin-bottom: 24px;
  }
`;

export const TextWrapper = styled.div`
  flex: 3;
  @media screen and (max-width: 900px) {
    flex: 1;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: 3rem 0;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Text = styled.p`
  font-size: 22px;
  margin-bottom: 24px;
  @media screen and (max-width: 720px) {
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

export const TextDanger = styled.p`
  font-size: 22px;
  margin-bottom: 24px;
  color: red;
  @media screen and (max-width: 720px) {
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

export const BoxText = styled.p`
  font-size: 36px;
  max-width: 600px;
  margin-bottom: 60px;
  @media screen and (max-width: 720px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: 10px;
`;

export const ItemList = styled.li`
  font-size: 22px;
  margin-bottom: 12px;
  @media screen and (max-width: 720px) {
    font-size: 18px;
  }
`;
