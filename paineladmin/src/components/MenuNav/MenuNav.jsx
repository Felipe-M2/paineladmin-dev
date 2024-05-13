import './MenuNav.css';

import Cad from '../../assets/icon-cad.svg';
import Config from '../../assets/icon-config.svg';
import Book from '../../assets/icon-book.svg';

const MenuNav = (props) => {
    return (
        <section className="menuNav">
            <div className="topoNavMenu">
                <h1>Cadastrsos</h1>

                <button onClick={props.closeModal}>X</button>
            </div>

            <div className="cardsMenuNav">
                <div className="cardMenu">
                    <img src={Cad} alt="" />

                    <h1>Novo Cliente</h1>

                    <p>Cadastro de novo cliente (para gerar contrato e guardar informações)</p>
                </div>

                <div className="cardMenu">

                    <img src={Book} alt="" />

                    <h1>Notas</h1>

                    <p>Cadastro de notas e avisos visíveis no painel!</p>
                </div>

                <div className="cardMenu">
                    <img src={Config} alt="" />

                    <h1>Ferramenta</h1>

                    <p>Cadastro de novo cliente (para gerar contrato e guardar informações)</p>
                </div>
            </div>
        </section>
    )
}

export default MenuNav;