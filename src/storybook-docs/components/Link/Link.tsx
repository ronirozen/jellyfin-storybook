import { FC } from "react";

import { LinkProps } from "./Link.type";
import { StyledLink } from "./Link.style";

export const Link: FC<LinkProps> = (props): JSX.Element => {
  return <StyledLink {...props} />;
};
