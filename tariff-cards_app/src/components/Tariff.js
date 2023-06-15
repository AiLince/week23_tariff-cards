import React from "react";
import "./Tariff.css";

const Tariff = ({ title, price, features, isPriority, color }) => {
    return (
    <div className={`tariff ${isPriority ? "priority" : ""}`} style={{ backgroundColor: color}}>
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