import { useState } from "react"
import HandleLogin from "../utils/handleLogin";
import style from "../styles/Login.module.css"

function LoginScreen() {

    const [nomeUsuario, setNomeUsuario] = useState();
    const [senha, setSenha] = useState();

    
    return (
            <main className={style.screen}>
                <section className={style.container}>
                    <header
                        className={style.header}>
                            <img
                                className={style.logo} 
                                src="src/assets/logos/fullBranca.png" 
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
                                    name="nomeUsuario"
                                    onChange={(e) => setNomeUsuario(e.target.value)} />
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
                                    name="senha"
                                    onChange={(e) => setSenha(e.target.value)}/>
                        </div>
                    </article>
                    <footer
                        className={style.footer}>
                            <button
                                onClick={() => HandleLogin(nomeUsuario, senha)}>
                                    Acessar
                            </button>
                    </footer>
                </section>
            </main>
    )


}


export default LoginScreen