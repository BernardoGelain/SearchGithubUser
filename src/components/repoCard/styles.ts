import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  padding: 20px;
  display: flex;
  border-radius: 11px;
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
  @media (max-width: 600px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 365px;
  }
`;
export const Title = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: bold;
`;
