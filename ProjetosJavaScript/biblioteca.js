const autores1 = "Machado de Assis,Clarice Lispector,Monteiro Lobato";
const autores2 = "J. K. Rowling,J. R. R. Tolkien";


function sistemaBiblioteca(autoresTexto, autorPesquisado) {
    let autoresArray = autoresTexto.split(",");
    let mensagem = "";

    for (let i = 0; i < autoresArray.length; i++) {
        mensagem += autoresArray[i] + "\n";
    }

    mensagem += "\n";

    if (autoresArray.includes(autorPesquisado)) {
        mensagem += "Autor encontrado\n";
    } else {
        mensagem += "Autor não encontrado\n";
    }

    mensagem += "\n";

    mensagem += "Lista de autores: " + autoresArray.join(", ");

    confirm(mensagem);
}

function exibirLivro(titulo, autor) {
    return `O livro "${titulo}" foi escrito por ${autor}.`;
}

sistemaBiblioteca(autores1, "Machado de Assis");

let mensagemLivro1 = exibirLivro("Dom Casmurro", "Machado de Assis");
confirm(mensagemLivro1);
