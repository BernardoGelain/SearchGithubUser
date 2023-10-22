import React from "react";
import { AppLinkAnchor, AppLinkContainer, UnderlineLink } from "./styles";
type AppLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

function AppLink({ children, ...props }: AppLinkProps) {
  return (
    <AppLinkContainer>
      <AppLinkAnchor href={props.href} target={props.target}>
        {children}
      </AppLinkAnchor>
      <UnderlineLink></UnderlineLink>
    </AppLinkContainer>
  );
}
export default AppLink;
