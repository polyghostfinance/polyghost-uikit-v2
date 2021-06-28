import { Colors } from "./types";

// Yellow #F9D92E
// Red #E60040
// Blue #15B0F8
// Purple #9027E2
// Pink #D4008F
// Dark blue #2F1B6D

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#E16428",
  primaryBright: "#E16428",
  primaryDark: "#E16428",
  secondary: "#FFFFFF",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  polygon: "#2F1B6D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#363333",
  background: "#FFFFFF",
  backgroundDisabled: "#E9EAEB",
  cardBorder: "#E7E3EB",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#272121",
  textDisabled: "#BDC2C4",
  textSubtle: "#363333",
  // #da9ead
  borderColor: "#E9EAEB",
  button: "#F9D92E",
  card: "#FFFFFF",
  alwaysWhite: "#fff",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #fff9da 0%, #f9dae2 100%)",
    cardHeader: "linear-gradient(139.73deg, #fff9da 0%, #f9dae2 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #E60C41 0%, #E60C41 100%)",
  },
};
// cardHeader: "linear-gradient(166.77deg, #e60c41 0%, #ffef98 100%)",
// bubblegum: "linear-gradient(139.73deg, #d4008f00 0%, #d4008f4a 100%)",
export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#E60C41",
  background: "#272121",
  backgroundDisabled: "#3c3742",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#4a4de7",
  button: "#a0e4f1",
  tertiary: "#353547",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#FFFFFF",
  borderColor: "#524B63",
  card: "#27262c",
  alwaysWhite: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #d4008f4a 0%, #d4008f00 100%)",
    cardHeader: "linear-gradient(139.73deg, #d4008f4a 0%, #d4008f00 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
  },
};

// background: linear-gradient(
//   139.73deg
//    ,#e60c41 0%,#fa6a8d7a 100%);
