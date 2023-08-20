import { ALL_STORIES, PATH_LIBRARY } from "constants/";
import { allIconsMap } from "storybook-docs/components/SearchIcons/SearchIcons.constants";

export const buildPathOfComponents = (code: string): string => {
  const iconsList = getIconsFromCode(code);
  const storiesList = getStoriesFromCode(code);

  const icons = iconsList.join(", ");
  const stories = storiesList.join(", ");

  const path = `import { ${stories} } from '${PATH_LIBRARY}'`;
  const pathIcons = icons ? `\nimport { ${icons} } from '${PATH_LIBRARY}/icons'` : "";

  return path + pathIcons;
};

export const getStoriesFromCode = (code: string): string[] => {
  const stories = code.match(/<([A-Z][A-z]+)/g)?.map(component => component.replace("<", "")) || [];
  return [...new Set(stories)].filter(story => Object.hasOwn(ALL_STORIES, story));
};

export const getIconsFromCode = (code: string): string[] => {
  const stories = code.match(/<([A-Z][A-z]+)/g)?.map(component => component.replace("<", "")) || [];
  return [...new Set(stories)].filter(story => allIconsMap.has(story));
};
