import { managementConvertColor } from "utils";

export const useOpacity = (color: string, opacity: number) => {
  const currentColor = managementConvertColor(color);

  return currentColor.replace(")", `, ${opacity})`).replace("rgb", "rgba");
};
