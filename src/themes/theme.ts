import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

// Create a custom dark theme
export const darkTheme = createTheme({
  spacing: [0, 4, 8, 16, 32, 64],
  palette: {
    mode: "dark",
    secondary: {
      main: "#BBBCBD",
    },
    primary: {
      main: purple[400],
    },
  },
});
