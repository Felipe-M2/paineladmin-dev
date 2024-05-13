import './Ferramentas.css';

import Arrow from '../../assets/arrow.svg';

const Ferramentas = ()=>{

    const links = [
        {
            nome: "Banco",
            link: "https://www.google.com.br"
        },
        {
            nome: "Vite",
            link: "https://www.vite.com.br"
        }
    ]

    return(
        <section className="ferramentasDiv">
            <div className="topoFerramentas">
                <img src={Arrow} alt="" />

                <h1>Ferramentas</h1>
            </div>

            <div className="linksFerramentas">
                {links.map((data)=>(
                    <a href={data.link}>{data.nome} </a>
                ))}
            </div>
        </section>
    )
}

export default Ferramentas;