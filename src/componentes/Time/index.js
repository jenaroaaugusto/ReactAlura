import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    const secondColor = { backgroundColor: props.corSecundaria }
    return (
        <section className="time" style={secondColor}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className= "colaboradores">
                {props.colaborador.map(colaborador => 
                    <Colaborador 
                        nome={colaborador.nome} 
                        cargo = {colaborador.cargo}
                        imagem = {colaborador.imagem}
                />)}
            </div>
        </section>
    )
};

export default Time;