import styled from "styled-components";

export const AppLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const AppLinkAnchor = styled.a`
  display: flex;
  word-wrap: break-word !important;
  flex-wrap: wrap;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
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
