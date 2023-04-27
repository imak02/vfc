import React from "react";
import ReactDOM from "react-dom/client";
import { ScopedCssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Toast } from "./components/Toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import MyThemeProvider from "./MyThemeProvider";
import "./api/axiosDefaults";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScopedCssBaseline enableColorScheme>
      {/* The rest of your application */}
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <MyThemeProvider>
            <Toast />
            <App />
          </MyThemeProvider>
        </QueryClientProvider>
      </Provider>
    </ScopedCssBaseline>
  </React.StrictMode>
);
