import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

const Botao = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="primary">
        {props.nomeBotao}
      </Button>
    </div>
  );
};

export default Botao;
