import { estudante } from "../utils/estudante";
import styles from '../styles/Profile.module.css'

function CardProfile() {

    const nomeEstudante = () => {
        return estudante.nome 
                             .toLowerCase()
                             .split(' ')
                             .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
                             .join(' ')
    }

    const verificaEstudante = () => {

        if(!estudante || Object.keys(estudante).length === 0) {     
            console.log("=0 false")    
            return false
        } else { 
            console.log("true")
            return true
        }

    }

    return (
        <> 
           {
             verificaEstudante() ? (
                <div
                    className={styles.containerProfile}>
                        <img 
                            className={styles.profileImage}
                            src={`src/assets/estudantes/${estudante.numeroSecretaria}.jpg`} 
                            alt={`${estudante.nome}`} />
                        <h1
                            className={styles.title}>
                                {nomeEstudante()}
                        </h1>
                        <h2
                            className={styles.subtitle}>
                                Série: {estudante.serie}{estudante.turma}
                        </h2>
                </div>   
             )
                
             : (
                <p>ERRO, não foi possível carregar o seu usuário</p>
             )
           }

           <button
            onClick={() => verificaEstudante()}>
                teste
           </button>
        </>
    )
}


export default CardProfile;