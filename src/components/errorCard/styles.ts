import styled from "styled-components";

export const ContainerError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
export const ErrorMessage = styled.span`
  font-size: 18px;
  text-wrap: wrap;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;
export const ErrorTitle = styled.h1`
  font-size: 18px;
  text-wrap: wrap;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;
export const ContainerErrorImage = styled.div`
  display: flex;
`;

export const ImageError = styled.img`
  max-width: 700px;
  margin-bottom: -50px;
  @media (max-width: 490px) {
    width: 80%;
    margin-inline: auto;
  }
`;
