import { useState } from 'react';
import './Painel.css';

import Bicicleta from '../../assets/bicicleta.svg';
import Logo from '../../assets/logo.svg';

import Dashboard from '../Dashboard/Dashboard';
import Notas from '../Notas/Notas';
import MenuNav from '../MenuNav/MenuNav';
import Ferramentas from '../Ferramentas/Ferramentas';

function Painel() {

    const [modal, setModal] = useState(false);

    const closeModal = ()=>{
        setModal(!modal);
    }

    return (
        <>
            <body className='painelAdmin'>
                <main className="contentAdmin">

                    <section className="rows">

                        <section className="row">

                            <div className="cadastros">

                                <div>
                                    <h1>Uma agência criativa!</h1>

                                    <div className="frase">
                                        <p>Diante da vastidão do tempo e da imensidão do universo, é um imenso prazer para mim dividir um planeta e uma época com você.</p>
                                        <h5>-Carl Sagan</h5>
                                    </div>

                                    <button onClick={closeModal}>Cadastros</button>
                                </div>

                                <img src={Bicicleta} alt="" />

                            </div>

                            <div className="loguinInfo">

                                <img src={Logo} alt="" />

                                <div className='infoUser'>
                                    <h1>Felipe M.</h1>

                                    <div>
                                        CEO
                                    </div>
                                </div>

                            </div>

                        </section>

                        <section className="row">

                            <div className="infoCadastros">
                                < Dashboard />
                            </div>

                            <div className="notas">
                                < Notas />
                            </div>

                        </section>

                    </section>

                    <section className="ferramentas">
                        <Ferramentas/>
                    </section>

                    {modal ? (
                        <section className="modalCadastros">
                            < MenuNav closeModal={closeModal} />
                        </section>
                    ): null}

                </main>
            </body>
        </>
    )
}

export default Painel
