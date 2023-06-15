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
      isPriority: false,
      color: "#28c2d6"
    },
    {
      title: "Безлимитный 450",
      price: 450,
      features: [
        "до 50 Мбит/сек",
        "Объём включенного трафика не ограничен",
      ],
      isPriority: false,
      color: "#198a73"
    },
    {
      title: "Безлимитный 550",
      price: 550,
      features: [
        "до 100 Мбит/сек",
        "Объём включенного трафика не ограничен",
      ],
      isPriority: true,
      color: "#c4534c"
    },
    {
      title: "Безлимитный 1000",
      price: 1000,
      features: [
        "до 200 Мбит/сек",
        "Объём включенного трафика не ограничен",
      ],
      isPriority: false,
      color: "#232b34"
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
