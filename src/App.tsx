import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Header, Footer } from "./components/Header/HeaderAndFooter";
import BlogSummaryList from "./pages/BlogSummaryList";
import BlogEditor from "./pages/BlogEditor";

import "./styles/App.css";
import { purple } from "@mui/material/colors";
import { BlogProvider } from "./context/BlogContext";

// Create a custom dark theme
const theme = createTheme({
  spacing: [0, 4, 8, 16, 32, 64],
  palette: {
    mode: "dark",
    secondary: {
      main: "#BBBCBD",
    },
    primary: {
      main: purple[500],
    },
  },
});

function App() {
  console.log("App.render");

  return (
    <ThemeProvider theme={theme}>
      <BlogProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<BlogSummaryList />} />
            <Route path="/edit/:id" element={<BlogEditor />} />
            <Route path="/new" element={<BlogEditor />} />
          </Routes>
        </Router>
        <Footer />
      </BlogProvider>
    </ThemeProvider>
  );
}

export default App;
