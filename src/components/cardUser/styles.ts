import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  padding: 10px;
  display: flex;
  border-radius: 11px;
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
  @media (max-width: 500px) {
    width: 365px;
  }
`;
export const ContainerUser = styled.div`
  display: flex;
  gap: 10px;
`;
export const ContainerProfile = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
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
  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
`;
export const BoldSpan = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
export const MinorSpan = styled.span`
  font-size: 14px;
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
