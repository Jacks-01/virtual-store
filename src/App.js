import Header from "./Components/Header";
import Products from "./Components/Products";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import Category from "./Components/Category";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Category/>
      <Products />
    </ThemeProvider>

  );
}

export default App;
