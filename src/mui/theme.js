import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: `"YekanBakh" + "Roboto" + "Arial" `,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightFat: 800,
    fontWeightHeavy: 900,
  },
  direction: "rtl",
  palette: {
    primary: { main: "#2A3D45" },
    secondary: { main: "#C17C74" },
  },
});

export default theme;
