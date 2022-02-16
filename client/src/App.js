import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from "axios";
import Card from "./components/cards/card"

function App() {
  //setando as variáveis global
  const [values, setValues] = useState();
  const [listProducts, setListProducts] = useState();

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

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListProducts(response.data);
    });
  }, []);

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
    </div>
  );
}

export default App;
