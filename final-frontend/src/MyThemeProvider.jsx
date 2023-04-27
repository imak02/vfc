import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";
import { useSelector } from "react-redux";

const MyThemeProvider = ({ children }) => {
  const themeMode = useSelector((state) => state.themeMode.value);
  let theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: "#7286d3",
      },
      secondary: {
        main: "#F1F7B5",
      },
      focusInput: {
        main: "#0000ff",
      },
    },
  });
  theme = responsiveFontSizes(theme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MyThemeProvider;
