import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
  opacity: 95%;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 10;
`;

export const GitHubLogo = styled.img`
  position: absolute;
  width: 150px;
`;
export const Loading = styled.img`
  position: absolute;
  width: 300px;
`;
