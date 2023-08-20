import * as mui from "@mui/icons-material";
import { Index as FlexSearchIndex } from "flexsearch";

import { synonyms } from "./synonyms";
import { getTheme } from "./SearchIcons.utils";
import type { IconType } from "./SearchIcons.type";

export const searchIndex = new FlexSearchIndex({ tokenize: "full" });

export const allIcons = Object.keys(mui)
  .sort()
  .map(importName => {
    const theme = getTheme(importName);
    const name = importName.replace(/(Outlined|TwoTone|Rounded|Sharp)$/, "");
    const icon: IconType = { importName, name, theme, Component: mui[importName] };

    let searchable = name;
    if (Object.hasOwn(synonyms, searchable)) {
      searchable += ` ${synonyms[searchable]}`;
    }

    searchIndex.addAsync(importName, searchable);

    return icon;
  });

export const allIconsMap: Map<keyof typeof mui, IconType> = new Map(
  allIcons.map(icon => [icon.importName, icon])
);
