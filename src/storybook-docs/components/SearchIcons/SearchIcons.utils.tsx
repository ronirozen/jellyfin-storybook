export const selectNode = (node: Element) => {
  // Clear any current selection
  const selection = window.getSelection();
  selection?.removeAllRanges();

  // Select code
  const range = document.createRange();
  range.selectNodeContents(node);
  selection?.addRange(range);
};

export const formatNumber = (value: number | bigint) => {
  return new Intl.NumberFormat("en-US").format(value);
};

export const getTheme = (value: string) => {
  if (value.includes("Outlined")) {
    return "Outlined";
  }

  if (value.includes("TwoTone")) {
    return "Two tone";
  }

  if (value.includes("Rounded")) {
    return "Rounded";
  }

  if (value.includes("Sharp")) {
    return "Sharp";
  }

  return "Filled";
};
