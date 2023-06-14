import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import { Header, Footer } from "./components";
import { BlogOverviewPage, BlogEditor } from "./pages";
import { BlogProvider } from "./context";

import "./styles/App.css";
import { darkTheme } from "./themes";

function App() {
  console.log("App.render");

  return (
    <ThemeProvider theme={darkTheme}>
      <BlogProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<BlogOverviewPage />} />
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
