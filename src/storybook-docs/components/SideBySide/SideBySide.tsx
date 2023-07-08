import { PropsWithChildren } from "react";
import { SideBySideStyled } from "./SideBySide.style";

export const SideBySide = (props: PropsWithChildren) => {
  return <SideBySideStyled {...props} />;
};
