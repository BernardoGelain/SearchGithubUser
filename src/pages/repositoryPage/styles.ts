import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const General = styled.div`
  width: 100%;
`;

export const CardRepo = styled.div`
  width: 700px;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
  @media (max-width: 750px) {
    width: 600px;
    flex-direction: column;
    gap: 30px;
  }
  @media (max-width: 600px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 380px;
    flex-direction: column;
    gap: 30px;
  }
`;
export const InfoUser = styled.div`
  display: flex;
  gap: 10px;
  padding-right: 10px;
  flex-direction: column;
  @media (max-width: 500px) {
    align-items: center;
  }
`;
export const InfoRepo = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    gap: 4px;
  }
`;
export const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;
export const Language = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding: 5px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 4px;
  margin-bottom: 4px;
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.secondary};
`;
export const ButtonClone = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  margin-top: 20px;

  border: none;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;
