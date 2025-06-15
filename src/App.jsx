import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchAppBar from "./components/Header";
import Cards from "./components/Cards";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Footer from "./components/Footer";
import CardDetail from "./components/cardDetail";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#181818" : "#fff",
        paper: darkMode ? "#222" : "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <SearchAppBar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          search={search}
          setSearch={setSearch}
        />
        <Routes>
          <Route path="/" element={<Cards search={search} />} />
          <Route path="/card/:id" element={<CardDetail />} />
        </Routes>
        <Footer darkMode={darkMode} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
