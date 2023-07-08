import { PropsWithChildren } from "react";

import { StyledHeading } from "./Heading.style";

export const Heading = ({ children }: PropsWithChildren) => <StyledHeading>{children}</StyledHeading>;
