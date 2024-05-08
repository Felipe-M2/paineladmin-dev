import './Painel.css';

import Bicicleta from '../../assets/bicicleta.svg';
import Logo from '../../assets/logo.svg';

function Painel() {

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

                                    <button>Cadastros</button>
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

                            </div>

                            <div className="notas">

                                <div className="titulo">
                                    <img src="" alt="" />
                                    <h1>Notas</h1>
                                </div>

                                <div className="cardsNotas">

                                </div>

                            </div>

                        </section>

                    </section>

                    <section className="ferramentas">

                        <div className="titulo">

                            <img src="" alt="" />
                            <h1>Ferramentas</h1>

                        </div>

                        <div className="listaFerramentas">

                        </div>
                        
                    </section>

                    <section className="modalCadastros">

                    </section>

                </main>
            </body>
        </>
    )
}

export default Painel
