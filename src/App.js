import Banner from './componentes/Banner';
import Time from './componentes/Time';
import Formulario from './componentes/Formulario';
import {useState} from 'react';
import Rodape from './componentes/Rodape';


function App() {

  const [colaboradores, setColaboradores] = useState([]);
  
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front-end",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "DevOps",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
    {
      nome: "Administrador",
      corPrimaria:  "#b9c928",
      corSecundaria:"#e5ff00",
    },
    {
      nome: "Colaborador",
      corPrimaria: "#00ffea",
      corSecundaria: "#21bfb2",
    },
  ];


  const aoNovoColaboradorAdcionado = (colaborador) => {
     // colaborador => setColaboradores()
    setColaboradores([...colaboradores, colaborador]);
  }
 
  return (
    <div className="App">
      <Banner />

      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdcionado(colaborador)}></Formulario>

      {times.map((time) => <Time 
        key={time.nome} 
        nome={time.nome}
        corPrimaria={time.corPrimaria} 
        corSecundaria = {time.corSecundaria}
        colaborador = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
      /> )}
      <Rodape/>
    </div>
  );
}

export default App;
