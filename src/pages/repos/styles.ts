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
  display: flex;
  justify-content: space-between;
  width: 600px;

  @media (max-width: 600px) {
    width: 500px;
    flex-wrap: wrap;
    gap: 20px;
  }
  @media (max-width: 500px) {
    width: 355px;
  }
  div {
    display: flex;

    align-items: center;
    gap: 10px;
  }
`;
export const Star = styled.img`
  width: 32px;
  margin-top: 15px;
`;
export const StarFilled = styled.img`
  width: 28px;
  margin-top: 15px;
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
  margin-top: 15px;
`;
export const ArrowStar = styled.img`
  width: 30px;
  margin-top: 15px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text};
`;
