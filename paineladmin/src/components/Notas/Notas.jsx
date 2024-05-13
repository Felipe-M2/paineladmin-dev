import './Notas.css';

import Carro from '../../assets/carro.svg';
import Arrow from '../../assets/arrow.svg';

const Notas = () => {
    return (
        <section className="notasComponent">


            <div className="topoNotas">
                <img src={Arrow} alt="" />
                <h1>Notas</h1>
            </div>

            <div className="notasCards">
                <div className="card">
                    <h1>Titulo TESTE TESTE</h1>

                    <div className="cardDescricao">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere neque magni quo reiciendis.
                    </div>
                </div>

                <div className="card">
                    <h1>Titulo</h1>

                    <div className="cardDescricao">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere neque magni quo reiciendis.
                    </div>
                </div>

                <div className="card">
                    <h1>Titulo</h1>

                    <div className="cardDescricao">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere neque magni quo reiciendis.
                    </div>
                </div>

                <div className="card">
                    <h1>Titulo</h1>

                    <div className="cardDescricao">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere neque magni quo reiciendis.
                    </div>
                </div>

            </div>

            <img src={Carro} alt="" />
        </section>
    )
}

export default Notas;