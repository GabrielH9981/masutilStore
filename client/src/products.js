import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Axios from "axios";
import Card from "./components/cards/card";
import Navbar from "./components/navbars/navbar_products";

const Products = () => {
    //setando as variáveis global
    const [listProducts, setListProducts] = useState();

    useEffect(() => {
        Axios.get("http://localhost:3001/getCards").then((response) => {
          setListProducts(response.data);
        });
      }, []);

    return (
        <div>
            <Navbar/>
            <center><h1>Lista de Produtos</h1></center>

            {typeof listProducts !== "undefined" && listProducts.map((value) => {
            //gera cada card e envia as info que ele precisa pra ser montado la no card.js
            return (  
                <Card 
                    key = {value.cod} 
                    listCard = {listProducts} 
                    setListCard= {setListProducts}
                    //ATENÇÃO AQUI - O NOME DAS VARIAVÉIS TA EM PT-BR PQ É COMO ESTÁ NO BANCO DE DADOS
                    cod={value.cod}
                    name={value.nome}
                    price_cost={value.preco_custo}
                    price_sell={value.preco_venda}
                    packaging_cost={value.custo_embalagem}
                ></Card>
            );
            })}

            {/* <Link to="/">retornar a página inicial</Link> */}
        </div>
    );
}

export default Products;