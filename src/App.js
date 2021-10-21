import React, {useEffect, useState} from "react";
import './styles/App.css'
import {BrowserRouter, Link, Redirect, Route, Switch} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./Components/UI/navbar/Navbar";
import Error from "./pages/Error";
import AppRouter from "./Components/AppRouter";

function App() {
  return(
      <BrowserRouter>
          <Navbar/>
            <AppRouter/>
      </BrowserRouter>
  )
}

export default App;
