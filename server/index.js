const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

//faz a conexão com o banco
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "crudMasutil",
});

//use das biblioteca doida que eu n sei mt bem como funciona
app.use(cors());
app.use(express.json());

//função para mandar os trem tudo pro banco de dados
app.post("/register", (req, res) => {
    const {cod} = req.body;
    const {name} = req.body;
    const {price_cost} = req.body;
    const {price_sell} = req.body;
    const {packaging_cost} = req.body;

    let SQL = "INSERT INTO Produtos( cod, nome, preco_custo, preco_venda, custo_embalagem) VALUES (?, ?, ?, ?, ?)";
    db.query(SQL, [cod, name, price_cost, price_sell, packaging_cost], (err, result) => {
      if (err) console.log("deu erro nesse trem aqui: " + err);
      else console.log("Ta Cadastrando com sucesso esse trem");
    });
});

app.get("/getCards", (req, res) => {
    let SQL = "SELECT * FROM Produtos";

    db.query(SQL, (err, result) => {
        if (err) console.log("deu erro nesse trem aqui: " + err);
        else res.send(result);
    });
});

app.put("/edit", (req, res) => {
    const { cod } = req.body;
    const { name } = req.body;
    const { price_cost } = req.body;
    const { price_sell } = req.body;
    const { packaging_cost } = req.body;
    let SQL = "UPDATE Produtos SET nome = ?, preco_custo = ?, preco_venda = ?, custo_embalagem = ? WHERE cod = ?";
    db.query(SQL, [name, price_cost, price_sell, packaging_cost, cod], (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });

  app.delete("/delete/:cod", (req, res) => {
    const { cod } = req.params;
    let SQL = "DELETE FROM Produtos WHERE cod = ?";
    db.query(SQL, cod, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

//========= teste db =========================================================
// app.get('/', (req, res) => {

//     let SQL = "INSERT INTO Produtos( nome, preco_custo, preco_venda, custo_embalagem) VALUES ( 'Alicate Tramontina', 20.90, 30.90, 0.50)";

//     db.query(SQL, (err, result) => {
//         console.log(err);
//     });
// });
//========= teste db ==========================================================

//trem pra rodar o servidor
app.listen(3001, () => {
    console.log("rodando certo, é o pijas");
});