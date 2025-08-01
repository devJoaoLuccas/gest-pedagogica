import style from '../styles/home.module.css'


function EstudanteInfo({estudante}) {

    console.log(JSON.stringify(estudante.quantidadeAtendimentos))

    const verificacaoPontuacao = () =>  {
            if (estudante.pontuacao < 0) {
                return "Negativo"
            }  else if (estudante.pontuacao >= 0) {
                return "Positivo"
            } else (
                null
            )
    }

    return (
            <article
                className={style.infoContainer}>
                    <div
                        className={style.infoBox}>
                            <h2>
                                Registros Pedagógicos:
                            </h2>
                            <h3>
                                {estudante.quantidadeRegistros}
                            </h3>
                    </div>
                    <div
                        className={style.infoBox}>
                                <h2>
                                    Pontuação:
                                </h2>
                                <h3>
                                    {estudante.pontuacao}
                                </h3>
                                <h4>
                                    {verificacaoPontuacao()}
                                </h4>
                    </div>
                    <div
                        className={style.infoBox}>
                            <h2>
                                Atendimentos:
                            </h2>
                            <h3>
                                {estudante.quantidadeAtendimentos}
                            </h3>
                    </div>
            </article>
    )
}


export default EstudanteInfo;