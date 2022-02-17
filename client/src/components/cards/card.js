import React from "react";
import "./card.css";
import FormDialog from "../dialogs/dialogForm"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card(props){
    const [open, setOpen] = React.useState(false);
    var preco_venda = parseFloat(props.price_sell.replace(",", "."));
    var preco_custo = parseFloat(props.price_cost.replace(",", "."));
    var custo_embalagem = parseFloat(props.packaging_cost.replace(",", "."));
    var lucro = preco_venda - (preco_venda * 0.18) - preco_custo - custo_embalagem;
    //var value = parseFloat("554,20".replace(",", "."));

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
            {/* <div className="card-container" onClick={() => setOpen(true)}>
                <h1 className="card--title">{props.name}</h1>
                <p className="card--price">{props.price_cost}</p>
                <p className="card--price">{props.price_sell}</p>
                <p className="card--price">{props.packaging_cost}</p>
            </div> */}
            <div class="row row-cols-1" onClick={() => setOpen(true)}>
                <div class="col">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{props.name}</h5>
                        <p class="card-text">
                            Preço de Custo: R$ {props.price_cost} --|--  
                            Preço de Venda: R$ {props.price_sell} --|-- 
                            Custo da Embalagem: R$ {props.packaging_cost} --|-- 
                            Lucro: R$ {lucro.toFixed(2)} --|--
                            Margem de Lucro: {((lucro / preco_venda)*100).toFixed(2)}%
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}