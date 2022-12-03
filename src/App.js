import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import CountryDetails from "./pages/homepage/CountryDetails";
import HomePage from "./pages/homepage/HomePage";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element=<HomePage /> />
          <Route path='/country/:id' element=<CountryDetails /> />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
