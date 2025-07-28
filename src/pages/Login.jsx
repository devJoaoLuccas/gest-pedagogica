import style from "../styles/Login.module.css"

function LoginScreen() {


    
    return (
            <main className={style.screen}>
                <section className={style.container}>
                    <header
                        className={style.header}>
                            <img
                                className={style.logo} 
                                src="src/assets/logoBranca.png" 
                                alt="Logo Perfil Branca"/>
                            <h1
                                className={style.title}>
                                    Gestão Pedagógica
                            </h1>
                    </header>
                    <article
                        className={style.formContainer}>
                        <div
                            className={style.inputContainer}>
                                <label 
                                    name="nomeUsuario"
                                    htmlFor="nomeUsuario">
                                        Usuário:
                                </label>
                                <input 
                                    type="text" 
                                    name="nomeUsuario" />
                        </div>
                        <div
                            className={style.inputContainer}>
                                <label 
                                    name="senha"
                                    htmlFor="senha">
                                        Senha:
                                </label>
                                <input 
                                    type="password" 
                                    name="senha"/>
                        </div>
                    </article>
                    <footer
                        className={style.footer}>
                            <button>
                                Acessar
                            </button>
                    </footer>
                </section>
            </main>
    )


}


export default LoginScreen