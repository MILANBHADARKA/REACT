import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";


function App() {


  return (
    <>
      <h1 className="bg-blue-400 text-black p-4 rounded-xl mb-10">Tailwind Test</h1>
      <Card Username = "Milan" BtnText = "Click ME" />
      <Card Username = 'Bhadarka' BtnText="Touch ME" />
    </>
  );
}

export default App;
