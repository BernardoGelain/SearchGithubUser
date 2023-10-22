import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  padding: 10px;
  display: flex;
  border-radius: 11px;
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
  @media (max-width: 600px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 355px;
  }
`;
export const ContainerUser = styled.div`
  display: flex;
  gap: 10px;
`;
export const ContainerProfile = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  color: ${({ theme }) => theme.colors.text};
`;
export const ContainerFollowers = styled.div`
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.colors.text};

  div {
    display: flex;
    gap: 5px;
  }
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;
export const BoldSpan = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;
export const MinorSpan = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;

  @media (max-width: 500px) {
    width: 80px;
    height: 80px;
  }
`;

export const ButtonRepos = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
