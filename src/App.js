import React, {useEffect, useState} from "react";
import './styles/App.css'
import {BrowserRouter, Link, Redirect, Route, Switch} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./Components/UI/navbar/Navbar";
import Error from "./pages/Error";
import AppRouter from "./Components/AppRouter";
import {AuthContext} from "./context";

function App() {
    const[isAuth, setIsAuth] = useState(false);
  return(
      <AuthContext.Provider value={{
          isAuth,
          setIsAuth: setIsAuth
      }}>
          <BrowserRouter>
              <Navbar/>
              <AppRouter/>
          </BrowserRouter>
      </AuthContext.Provider>
  )
}

export default App;
