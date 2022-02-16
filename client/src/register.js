import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Axios from "axios";

const Usuario = () => {
    //setando as variáveis global
    const [values, setValues] = useState();

    //função pra pegar os trem digitado
    const handleChangeValues = (value) =>{
        setValues((prevValue) => ({
        ...prevValue,
        [value.target.name]: value.target.value,
        }));
    };

    //função de enviar pro server via post depois q clica no botão
    const handleClickButton = () => {
        Axios.post("http://localhost:3001/register", {
            cod: values.cod,
            name: values.name,
            price_cost: values.price_cost,
            price_sell: values.price_sell,
            packaging_cost: values.packaging_cost,
        }).then((response) => {
            console.log("é ele: " + response);
        });
    };

    return (
        <div className="app--container">
            <div className="register--container">
                <h1>Cadastro de Produtos</h1>
                <input
                    type="text"
                    name="cod"
                    placeholder="SKU (BLING)"
                    className="register--input"
                    onChange={handleChangeValues}
                />
                <br/>
                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    className="register--input"
                    onChange={handleChangeValues}
                />
                <br/>
                <input
                    type="text"
                    name="price_cost"
                    placeholder="Preço de Custo"
                    className="register--input"
                    onChange={handleChangeValues}
                />
                <br/>
                <input
                    type="text"
                    name="price_sell"
                    placeholder="Preço de Venda"
                    className="register--input"
                    onChange={handleChangeValues}
                />
                <br/>
                <input
                    type="text"
                    name="packaging_cost"
                    placeholder="Custo da Embalagem"
                    className="register--input"
                    onChange={handleChangeValues}
                />
                <br/>
                <button class="register--btn" onClick={() => handleClickButton()}>Cadastrar</button>
            </div>
            <Link to="/">retornar a página inicial</Link>
        </div>
    );
}

export default Usuario;