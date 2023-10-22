import { useContext } from "react";
import AppLink from "../appLink/applink";
import {
  ContainerError,
  ContainerErrorImage,
  ErrorMessage,
  ErrorTitle,
  ImageError,
} from "./styles";
import { ThemeContext } from "../../App";
import darkRobot from "/assets/errorDark.svg";
import whiteRobot from "/assets/errorWhite.svg";

type Props = {
  statusCode?: number;
};

type Error = {
  title: string;
  message: string;
  svgIcon: string;
  href: string;
  label: string;
};

export default function ErrorCard({ statusCode = 404 }: Props) {
  const { theme } = useContext(ThemeContext);
  const imageError = theme === "light" ? whiteRobot : darkRobot;
  const variants: Record<number, Error> = {
    500: {
      title: "Oops! An error occurred",
      message: "Don't worry, we are aware of it and working on fixing it.",
      svgIcon: "",
      href: "/",
      label: "Go back to the home screen",
    },
    404: {
      title: "Oops! An error occurred",
      message: "It seems this page was not found.",
      svgIcon: "",
      href: "/",
      label: "Go back to the home screen",
    },
    400: {
      title: "Oops! We're working on this content",
      message: "Don't worry, we will make it available soon.",
      svgIcon: "",
      href: "/",
      label: "Go back to the home screen",
    },
    401: {
      title: "Oops! This page is not available",
      message: "You need to be authenticated to access this content.",
      svgIcon: "",
      href: "/",
      label: "Go back to the home screen",
    },
  };

  return (
    <>
      <ContainerError>
        <ContainerErrorImage>
          <ImageError src={imageError} alt="Robot" />
        </ContainerErrorImage>
        <ErrorTitle>{variants[statusCode].title}</ErrorTitle>
        <ErrorMessage>{variants[statusCode].message}</ErrorMessage>
        <AppLink href={variants[statusCode].href}>
          {variants[statusCode].label}
        </AppLink>
      </ContainerError>
    </>
  );
}
