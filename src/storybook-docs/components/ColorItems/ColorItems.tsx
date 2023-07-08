import { Grid } from "@mui/material";

import { ColorItem } from "../ColorItem";
import { Group } from "./ColorItems.style";
import { ColorItemsProps } from "./ColorItems.type";

export const ColorItems = ({ title, items }: ColorItemsProps) => {
  return (
    <>
      <Group gutterBottom>{title}</Group>
      <Grid container spacing={2}>
        {items.map(item => (
          <ColorItem {...item} />
        ))}
      </Grid>
    </>
  );
};
