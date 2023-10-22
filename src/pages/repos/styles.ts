import styled from "styled-components";

export const ReposContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const ContainerOrder = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 600px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 365px;
  }
`;

export const Select = styled.select`
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
  width: 300px;
  border: none;
  height: 2.5;
  padding: 10px;
  font-size: 18px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Arrow = styled.img`
  width: 30px;
`;
