import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    const secondColor = { backgroundColor: props.corSecundaria }
    return (
        (props.colaborador.length > 0) ? <section className="time" style={secondColor}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className= "colaboradores">
                {props.colaborador.map(colaborador => 
                    <Colaborador 
                        key={colaborador.name}
                        nome={colaborador.nome} 
                        cargo = {colaborador.cargo}
                        imagem = {colaborador.imagem}
                        corDeFundo = {props.corPrimaria}
                />)}
            </div>
        </section>
        : ''
    )
};

export default Time;