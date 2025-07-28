

function HandleLogin(nomeUsuario, senha) {

    const usuario = ({
        nome:"joao",
        senha:"joaodemais"
    })

    if (nomeUsuario == '' || senha == '') {
        return alert("vazio") 
    } else if (nomeUsuario == usuario.nome && senha == usuario.senha) {
        return alert("parabens")
    } else {
        return alert("credencial invalida")
    }


}


export default HandleLogin