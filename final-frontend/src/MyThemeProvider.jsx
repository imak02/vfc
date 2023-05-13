import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";
import { useSelector } from "react-redux";

const MyThemeProvider = ({ children }) => {
  const themeMode = useSelector((state) => state.themeMode.value);
  let theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: "#ffa500",
      },
      secondary: {
        main: "#ff4500",
      },
      focusInput: {
        main: "#0000ff",
      },
    },
    typography: {
      button: {
        textTransform: "none",
      },
    },
  });
  theme = responsiveFontSizes(theme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MyThemeProvider;
