import React from "react";
import "./card.css";
import FormDialog from "../dialogs/dialogForm"

export default function Card(props){
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <FormDialog
                open={open}
                setOpen={setOpen}
                name={props.name}
                price_cost={props.price_cost}
                price_sell={props.price_sell}
                packaging_cost={props.packaging_cost}
                listCard={props.listCard}
                setListCard={props.setListCard}
                cod={props.cod}
            />
            <div className="card-container" onClick={() => setOpen(true)}>
                <h1 className="card--title">{props.name}</h1>
                <p className="card--price">{props.price_cost}</p>
                <p className="card--price">{props.price_sell}</p>
                <p className="card--price">{props.packaging_cost}</p>
            </div>
        </>
    );
}