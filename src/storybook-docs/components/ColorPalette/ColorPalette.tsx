import { Box, Palette, PaletteMode } from "@mui/material";

import { ColorItems } from "../ColorItems";
import { ColorItemProps } from "../ColorItem";

import { ThemeProvider, colors, useTheme } from "style";
import { SideBySide } from "../SideBySide";
import { useMemo } from "react";

const backgroundFields: { key: keyof Palette; title?: string }[] = [
  { title: "Typography", key: "text" },
  { title: "Buttons", key: "action" },
  { key: "background" },
  { key: "divider" }
];

export const ColorPalette = () => {
  const theme = useTheme();

  const mode = useMemo<Capitalize<PaletteMode>>(
    () =>
      (theme.palette.mode.charAt(0).toUpperCase() + theme.palette.mode.slice(1)) as Capitalize<PaletteMode>,
    [theme]
  );

  const getColorIsPaletteColor = (color: unknown): color is { [K in string]: string } =>
    typeof color === "object";

  return (
    <ThemeProvider theme={theme}>
      <SideBySide>
        <Box sx={{ width: "100%" }}>
          <h4>{`${mode} theme Colors`}</h4>
          {Object.entries(theme.palette).map(([key, color]) => {
            if (!colors.includes(key)) {
              return null;
            }

            if (getColorIsPaletteColor(color)) {
              return (
                <ColorItems
                  key={key}
                  title={key}
                  items={["light", "main", "dark"].reduce(
                    (acc, mode) =>
                      typeof color[mode] === "string" &&
                      (color[mode].match(/^#/) || color[mode].match(/^rgb/) || mode.match(/color/i))
                        ? [...acc, { name: mode, color: color[mode] }]
                        : acc,
                    [] as ColorItemProps[]
                  )}
                />
              );
            }
            return null;
          })}
        </Box>
        <Box sx={{ width: "100%" }}>
          <h4>{`${mode} theme Backgrounds`}</h4>
          {backgroundFields.map(({ key, title = key }) => {
            const color: unknown = theme.palette[key];
            if (!["background", "text", "action", "divider"].includes(key)) {
              return null;
            }

            if (
              typeof color === "string" &&
              (color.match(/^#/) || color.match(/^rgb/) || key.match(/color/i))
            ) {
              return <ColorItems key={key} title={title} items={[{ name: key, color }]} />;
            }

            if (typeof color === "object") {
              return (
                <ColorItems
                  key={key}
                  title={title}
                  items={Object.entries(color).reduce(
                    (acc, [key, value]: [string, unknown]) =>
                      typeof value === "string" &&
                      (value.match(/^#/) || value.match(/^rgb/) || key.match(/color/i))
                        ? [...acc, { name: key, color: value }]
                        : acc,
                    [] as ColorItemProps[]
                  )}
                />
              );
            }

            return null;
          })}
        </Box>
      </SideBySide>
    </ThemeProvider>
  );
};
