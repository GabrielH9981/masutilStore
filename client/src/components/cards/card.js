import React from "react";

export default function Card(props){
    return (
        <div className="card--container">
            <h1 className="card--title">{props.name}</h1>
            <p className="card--price">{props.price_cost}</p>
            <p className="card--price">{props.price_sell}</p>
            <p className="card--price">{props.packaging_cost}</p>
        </div>
    );
}