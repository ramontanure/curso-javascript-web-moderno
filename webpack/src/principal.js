// const Pessoa = require("./pessoa");

// Sistemas de modulos do EcmaScript
import Pessoa from "./pessoa";
import "./assets";

const atendente = new Pessoa();
console.log(atendente.cumprimentar());
