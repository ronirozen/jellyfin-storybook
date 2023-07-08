// Type
import { LinkProps } from "./Link.type";

// Style
import { StyledLink } from "./Link.style";

export const Link = ({ ...props }: LinkProps) => <StyledLink target="_blank" rel="noopener" {...props} />;
