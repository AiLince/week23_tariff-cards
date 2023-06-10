import React from "react";
import "./App.css";
import Tariff from "./components/Tariff";

export default function App() {
  const tariffs = [
    {
      title: "Безлимитный 300",
      price: 300,
      features: [
        "до 10 Мбит/сек",
        "Объём включенного трафика не ограничен",
      ],
      isHighlighted: false
    },
    {
      title: "Безлимитный 450",
      price: 450,
      features: [
        "до 50 Мбит/сек",
        "Объём включенного трафика не ограничен",
      ],
      isHighlighted: false
    },
    {
      title: "Безлимитный 550",
      price: 550,
      features: [
        "до 100 Мбит/сек",
        "Объём включенного трафика не ограничен",
      ],
      isHighlighted: true
    },
    {
      title: "Безлимитный 1000",
      price: 1000,
      features: [
        "до 200 Мбит/сек",
        "Объём включенного трафика не ограничен",
      ],
      isHighlighted: false
    },
  ];

  return (
    <div className="App">
      <h1>Выберите тариф</h1>
      <div className="tariffs">
        {tariffs.map((tariff, index) => (
          <Tariff key={index} {...tariff} />
        ))}
      </div>
    </div>
  );
}
