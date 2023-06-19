import React from "react";
import "./Tariff.css";

const Tariff = ({ title, price, features, isPriority, color, isActive, setActive }) => {
    const handleClick = () => {
    setActive(title);
    };

    return (
    <div
        className={`tariff ${
        isActive ? "active" : ""
        }`}
        style={{ backgroundColor: color }}
        onClick={handleClick}
    >
        <h2 className="tariff-title">{title}</h2>
        <div className="tariff-price">{price}р/мес</div>
        <ul className="tariff-features">
        {features.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
    </div>
    );
};

export default Tariff;