import { rgbToHex } from "@mui/material";

// Stories
import { Typography } from "stories/data-display/Typography";

import { Color } from "./ColorItem.style";
import { ColorItemProps } from "./ColorItem.type";

export const ColorItem = ({ color, name }: ColorItemProps) => (
  <Color item xs={12} sm={8} md={6} lg={4}>
    <div style={{ backgroundColor: color }} />
    <div>
      <Typography variant="body2">{name}</Typography>
      <Typography variant="body2" color="secondary">
        {rgbToHex(color)}
      </Typography>
    </div>
  </Color>
);
