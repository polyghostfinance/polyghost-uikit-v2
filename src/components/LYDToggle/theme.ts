import { darkColors, lightColors } from "../../theme/colors";
import { LYDToggleTheme } from "./types";

export const light: LYDToggleTheme = {
  handleBackground: lightColors.card,
  handleShadow: lightColors.textDisabled,
};

export const dark: LYDToggleTheme = {
  handleBackground: darkColors.card,
  handleShadow: darkColors.textDisabled,
};
