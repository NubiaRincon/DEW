function exibirEvento(evento) {
    let mensagem = "";

    let dataFormatada = evento.data.toLocaleDateString("pt-BR", {
        timeZone: "UTC"
    });

    let localCadastrado = evento.hasOwnProperty("local");
    mensagem += `Evento: ${evento.nome}\n`;

    if (localCadastrado && evento.local !== "") {
        mensagem += `Local: ${evento.local}\n`;
    }
    mensagem += `\n${dataFormatada}\n\n`;

    mensagem += `Participantes: ${evento.participantes.length}\n\n`;
    if (evento.participantes.length === 0) {
        mensagem += "Nenhum participante cadastrado\n\n";
    }
    mensagem += `Local cadastrado: ${localCadastrado}\n\n`;

    mensagem += "Propriedades e valores:\n";

    for (let propriedade in evento) {
        mensagem += `${propriedade}: ${evento[propriedade]}\n`;
    }

    mensagem += "\nTipos das informações:\n";
    for (let propriedade in evento) {
        mensagem += `${propriedade}: ${typeof evento[propriedade]}\n`;
    }

    confirm(mensagem);
}

let evento1 = {nome: "Semana da Tecnologia", local: "Auditório", data: new Date("2026-08-20"),
    participantes: ["Ana", "Carlos", "Marcos"]};
exibirEvento(evento1);

let evento2 = {nome: "Workshop Angular", local: "Laboratório 5", data: new Date("2026-09-10"), 
    participantes: []};
exibirEvento(evento2);