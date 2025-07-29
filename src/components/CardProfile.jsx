import { estudantes } from "../utils/estudantes";
import { estudante } from "../utils/estudante";

function CardProfile() {

    return (
        <> 
           {
             estudante != null ? 
                <div>
                    <img 
                        src={`src/assets/estudantes/${estudante.numeroSecretaria}`} 
                        alt="" />
                </div> 
             : <p>Erro estudante não encontrado</p>

           }
        </>
    )
}


export default CardProfile;