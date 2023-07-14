import { ProgressBarProps } from "./ProgressBar.type";
import { ProgressBarStyled } from "./ProgressBar.style";

export const ProgressBar = (props: ProgressBarProps) => {
  return <ProgressBarStyled variant="determinate" aria-label="progress-bar" {...props} />;
};
