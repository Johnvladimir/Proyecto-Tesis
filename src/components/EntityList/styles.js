import styled from "styled-components";

export const EntityItemContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 60px 0;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 36px;
  max-width: 600px;
  @media screen and (max-width: 720px) {
    font-size: 24px;
  }
`;

export const Message = styled.div`
  font-size: 20px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
  color: red;
`;
