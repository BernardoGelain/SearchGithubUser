import styled from "styled-components";

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 600px;
  padding: 20px;
  display: flex;
  border-radius: 11px;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
  @media (max-width: 600px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 355px;
  }
`;
export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
  div {
    display: flex;
    align-items: flex-end;
    gap: 3px;
  }
`;
export const Title = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: -2px;
  align-items: center;
`;

export const Icon = styled.img`
  width: 20px;
`;
