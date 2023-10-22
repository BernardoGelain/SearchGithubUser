import styled from "styled-components";

export const AppLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AppLinkAnchor = styled.a`
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    width: 100%;
    transition: 500ms;
  }
`;

export const UnderlineLink = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.gradient};

  &:hover {
    width: 0%;
    transition: 500ms;
  }
`;
