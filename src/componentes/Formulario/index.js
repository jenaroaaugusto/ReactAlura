import Botao from "../Botao";
import { useState } from "react";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = ( props ) => {

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (event) => {
    event.preventDefault();
    console.log("Salvando...");
    console.log("Valores do campo",nome, cargo, imagem);
    console.log("Time", time);
    props.aoColaboradorCadastrado({nome, cargo, imagem, time});
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          required={true}
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          required={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          required={true} 
          label="Time" 
          itens={props.times} 
          valor = {time}
          aoAlterado={(valor) => setTime(valor)}
          />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
