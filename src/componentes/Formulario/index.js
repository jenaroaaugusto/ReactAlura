import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const time = [
    "Programação",
    "Front-end",
    "Data Science",
    "DevOps",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
    "Administrador",
    "Colaborador"
    
  ];

  const aoSalvar = ( event ) => {
    event.preventDefault();
    console.log("Salvando...");
    console.log(event)
    console.log(event.target)
  }

  return (
    <section className = "formulario">
      <form onSubmit = {aoSalvar} >
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto required = {true} label="Nome" placeholder="Digite o seu nome" />
        <CampoTexto required = {true} label="Cargo" placeholder="Digite o seu cargo" />
        <CampoTexto required = {true} label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa required = {true} label="Time" itens={time} />
        <Botao> 
        Criar card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
