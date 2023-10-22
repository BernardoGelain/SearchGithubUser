import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  flex-direction: column;
  padding-top: 10rem;
  gap: 36px;
`;
export const GitHubLogo = styled.img`
  max-width: 250px;

  @media (max-width: 400px) {
    width: 200px;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  padding: 10px;
  border-radius: 11px;
  border: none;
  width: 300px;

  background-image: ${({ theme }) => theme.colors.gradient};

  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
export const Search = styled.input`
  width: 300px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  height: 2.5;
  padding: 10px;
  font-size: 18px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
`;
