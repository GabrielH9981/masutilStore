import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import produce from "immer";

export default function FormDialog(props) {
  const new_name = document.querySelector("#name");
  const new_price_cost = document.querySelector("#price_cost");
  const new_price_sell = document.querySelector("#price_sell");
  const new_packaging_cost = document.querySelector("#packaging_cost");

  const [editValues, setEditValues] = useState({
    cod: props.cod,
    name: props.name,
    price_cost: props.price_cost,
    price_sell: props.price_sell,
    packaging_cost: props.packaging_cost,
  });

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.cod]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditProduct = () => {
    console.log("OLHA"+new_name.value)
    //aqui nesse primeiro que vai o nome novo
    Axios.put("http://localhost:3001/edit", {
      cod: editValues.cod,
      name: new_name.value,
      price_cost: new_price_cost.value,
      price_sell: new_price_sell.value,
      packaging_cost: new_packaging_cost.value,
    }).then(() => {
      props.setListCard(
        props.listCard.map((value) => {
          return value.cod == editValues.cod
            ? {
                cod: editValues.cod,
                name: editValues.name,
                price_cost: editValues.price_cost,
                price_sell: editValues.price_sell,
                packaging_cost: editValues.packaging_cost,
              }
            : value;
        })
      );
    });
    document.location.reload(true);
    handleClose();
  };

  const handleDeleteProduct = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.cod}`).then(() => {
      props.setListCard(
        props.listCard.filter((value) => {
          return value.cod != editValues.cod;
        })
      );
    });
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="cod"
            label="SKU (Bling)"
            defaultValue={props.cod}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Produto"
            defaultValue={props.name}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="price_cost"
            label="Preço de Custo"
            defaultValue={props.price_cost}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="price_sell"
            label="Preço de Venda"
            defaultValue={props.price_sell}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="packaging_cost"
            label="Custo da Embalagem"
            defaultValue={props.packaging_cost}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleDeleteProduct()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handleEditProduct()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}