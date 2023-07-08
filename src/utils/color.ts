export const convertStringToEncodeURI = (data: string) =>
  data.replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent);

export const managementConvertColor = (color: string) => {
  const typesColor =
    /(#([\da-f]{3}){1,2}|(rgb|hsl)a\((\d{1,3}%?,\s?){3}(1|0|0?\.\d+)\)|(rgb|hsl)\(\d{1,3}%?(,\s?\d{1,3}%?){2}\))/gi;
  if (!typesColor.test(color.replace(/\s/g, ""))) {
    throw new Error("Invalid color: " + color);
  }

  switch (color.toLowerCase().split(/[\da-f]{3}|\(/)[0]) {
    case "#":
      return HEXToRGB(color);
    case "hsl":
    case "hsla":
      return HSLToRGB(color);
    case "rgb":
      return color;
    case "rgba":
      return RGBAtoRGB(color);
    default:
      return "";
  }
};

export const RGBAtoRGB = (rbga: string) => {
  const rbgaList = rbga.match(
    /rgba\((-?\d{1,3}),\s*(-?\d{1,3}),\s*(-?\d{1,3}),\s*([0-1]?(?:\.\d+)?)\)/
  ) as RegExpMatchArray;

  const [, cRed, cGreen, cBlue, cAlpha] = rbgaList;

  const red = 1 - Number(cAlpha) + Number(cAlpha) * Number(cRed);
  const blue = 1 - Number(cAlpha) + Number(cAlpha) * Number(cBlue);
  const green = 1 - Number(cAlpha) + Number(cAlpha) * Number(cGreen);

  return `rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`;
};

export const HSLToRGB = (hsl: string) => {
  const sep = hsl.trim().indexOf(",") > -1 ? "," : " ";
  const hslList = hsl.slice(4).split(")")[0].split(sep);

  let hStr = hslList[0],
    h = 0,
    s = Number(hslList[1].slice(0, hsl[1].length - 1)) / 100,
    l = Number(hslList[2].slice(0, hsl[2].length - 1)) / 100;

  if (hStr.indexOf("deg") > -1) {
    h = Number(hStr.slice(0, hStr.length - 3));
  } else if (hStr.indexOf("rad") > -1) {
    h = Math.round(Number(hStr.slice(0, hStr.length - 3)) * (180 / Math.PI));
  } else if (hStr.indexOf("turn") > -1) {
    h = Math.round(Number(hStr.slice(0, hStr.length - 4)) * 360);
  }
  // Keep hue fraction of 360 if ending up over
  if (h >= 360) {
    h %= 360;
  }

  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return `rgb(${r},${g},${b})`;
};

export const HEXToRGB = (hex: string) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex) as RegExpExecArray;
  const red = parseInt(result[1], 16),
    green = parseInt(result[2], 16),
    blue = parseInt(result[3], 16),
    alpha = parseInt(result[4], 16) / 255;

  if (!Number.isNaN(alpha)) {
    return RGBAtoRGB(`rgba(${red},${green},${blue},${alpha})`);
  }

  return `rgb(${red},${green},${blue})`;
};
