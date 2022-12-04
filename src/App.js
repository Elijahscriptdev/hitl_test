import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactSwitch from "react-switch";
import "./App.scss";
import CountryDetails from "./pages/homepage/CountryDetails";
import HomePage from "./pages/homepage/HomePage";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='App' id={theme}>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element=<HomePage /> />
            <Route path='/country/:id' element=<CountryDetails /> />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
