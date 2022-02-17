import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Axios from "axios";
import Navbar from "./components/navbars/navbar_register";
import './css/register.css'
import './css/register_form.css'

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
        document.location.reload(true);
    };

    return (
        <div className="app--container">
            
            <Navbar/>
            
            <div class="form">
                <div class="title">Cadastro de Produtos</div>
                <div class="input-container ic1">
                    <input id="cod" name="cod" class="input" type="text" placeholder="SKU" onChange={handleChangeValues}/>
                    {/* <div class="cut"></div>
                    <label for="cod" class="placeholder">SKU</label> */}
                </div>
                <div class="input-container ic2">
                    <input id="name" name="name" class="input" type="text" placeholder="Produto" onChange={handleChangeValues}/>
                    {/* <div class="cut"></div>
                    <label for="name" class="placeholder">Produto</label> */}
                </div>
                <div class="input-container ic2">
                    <input id="price_cost" name="price_cost" class="input" type="text" placeholder="Preço de Custo" onChange={handleChangeValues}/>
                    {/* <div class="cut cut-short"></div>
                    <label for="price_cost" class="placeholder">Preço de Custo</label> */}
                </div>
                <div class="input-container ic2">
                    <input id="price_sell" name="price_sell" class="input" type="text" placeholder="Preço de Venda" onChange={handleChangeValues}/>
                    {/* <div class="cut cut-short"></div>
                    <label for="price_sell" class="placeholder">Preço de Venda</label> */}
                </div>
                <div class="input-container ic2">
                    <input id="packaging_cost" name="packaging_cost" class="input" type="text" placeholder="Custo de Embalagem" onChange={handleChangeValues}/>
                    {/* <div class="cut cut-short"></div>
                    <label for="packaging_cost" class="placeholder">Custo de Embalagem</label> */}
                </div>
                <button type="text" class="submit" onClick={() => handleClickButton()}>Cadastrar</button>
            </div>
            {/* <Link to="/">retornar a página inicial</Link> */}
        </div>
    );
}

export default Usuario;