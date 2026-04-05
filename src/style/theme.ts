export type ThemeName = "light" | "dark";
export type ColorKey = "primary" | "background" | "secondary" | "third" | "border" | "text";
export type HeadingSize = "large" | "medium" | "small";
export type ButtonSize = "large" | "medium" | "small";
export type ButtonScheme = "primary" | "normal" | "like";
export type LayoutWidth = "large" | "medium" | "small";

interface Theme {
  name: ThemeName;
  color: Record<ColorKey, string>;
  heading: Record<HeadingSize, { fontSize: string }>;
  button: Record<ButtonSize, { fontSize: string; padding: string }>;
  buttonScheme: Record<ButtonScheme, { color: string; backgroundColor: string; border: string }>;
  layout: Record<LayoutWidth, { width: string }>;
}

export const light: Theme = {
  name: "light",
  color: {
    primary: "#ff5800",
    background: "lightgray",
    secondary: "#5F5F5F",
    third: "green",
    border: "grey",
    text: "black",
  },
  heading: {
    large: { fontSize: "2rem" },
    medium: { fontSize: "1.5rem" },
    small: { fontSize: "1rem" },
  },
  button: {
    large: { fontSize: "1.5rem", padding: "1rem 2rem" },
    medium: { fontSize: "1rem", padding: "0.5rem 1rem" },
    small: { fontSize: "0.75rem", padding: "0.25rem 0.5rem" },
  },
  buttonScheme: {
    primary: { color: "white", backgroundColor: "#ff5800", border: "none" },
    normal: { color: "black", backgroundColor: "lightgray", border: "1px solid grey" },
    like: { color: "white", backgroundColor: "coral", border: "none" },
  },
  layout: {
    large: { width: "1020px" },
    medium: { width: "760px" },
    small: { width: "520px" },
  },
};

export const dark: Theme = {
  ...light,
  name: "dark",
  color: {
    primary: "coral",
    background: "black",
    secondary: "darkblue",
    third: "darkgreen",
    border: "grey",
    text: "white",
  },
};

export const getTheme = (themeName: ThemeName): Theme => {
  return themeName === "light" ? light : dark;
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}



