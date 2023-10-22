import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  display: flex;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const ButtonDarkLight = styled.button`
  width: 38px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  img {
    width: 32px;
  }
`;
