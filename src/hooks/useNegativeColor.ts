import { useState, useEffect } from "react";

// Utils
import { managementConvertColor } from "utils";

export function useNegativeColor(color: string, whiteOrBlack?: boolean, contrast = 128) {
  const [colors, setColors] = useState<{
    currentColor: string;
    negativeColor: string;
  }>({
    currentColor: "",
    negativeColor: ""
  });

  useEffect(() => {
    if (color) {
      const currentColor = managementConvertColor(color);

      const currentColors = currentColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/) as RegExpMatchArray;
      const brightness = 1;

      const R = Number(currentColors[1]);
      const G = Number(currentColors[2]);
      const B = Number(currentColors[3]);

      if (whiteOrBlack) {
        const yiq = (R * 299 + G * 587 + B * 114) / 1000;
        setColors({
          currentColor,
          negativeColor: yiq >= contrast ? "#212121" : "#fff"
        });
        return;
      }

      const ir = Math.floor((255 - R) * brightness);
      const ig = Math.floor((255 - G) * brightness);
      const ib = Math.floor((255 - B) * brightness);
      setColors({ currentColor, negativeColor: `rgb(${ir}, ${ig}, ${ib})` });
    }
  }, [color]);

  return colors;
}
