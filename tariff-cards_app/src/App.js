import React, { useState } from "react";
import "./App.css";
import Tariff from "./components/Tariff.js";
import tariffsData from "./components/Tariff.json";

export default function App() {
  const tariffs = tariffsData;

  const [activeTariff, setActiveTariff] = useState("");
  
  const handleSetActiveTariff = (title) => {
    setActiveTariff(title);
  };

  return (
    <div className="App">
      <h1>Выберите тариф</h1>
      <div className="tariffs">
        {tariffs.map((tariff, index) => (
          <Tariff key={index} {...tariff} isActive={activeTariff === tariff.title}
          setActive={handleSetActiveTariff}/>
        ))}
      </div>
    </div>
  );
}