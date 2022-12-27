import './Colaborador.css'

const Colaborador = ({imagem, nome, cargo}) =>{

    return (
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src={imagem} alt={nome +' imagem'}/>
            </div>
            <div className='rodape' >
                <h4> {nome} </h4>
                <h5> {cargo}</h5>
            </div>

        </div>
    )
}
// https://github.com/jenaroaaugusto.png
export default Colaborador