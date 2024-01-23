import React from "react";
import { Outlet } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

function App() {
  return (
    <>
      <LoadingSpinner />
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
