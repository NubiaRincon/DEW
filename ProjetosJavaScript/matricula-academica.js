const disciplinas1 = ["HTML", "CSS", "JavaScript"];
const disciplinas2 = ["Banco de Dados", "", "TCC", "Redes"];

let txtDisciplinas = "";
let lacoInterrompido = false;

for (let i = 0; i < disciplinas1.length; i++) {
    if (disciplinas1[i] === "") {
        continue;
    }

    txtDisciplinas += disciplinas1[i] + "\n";

    if (disciplinas1[i] === "TCC") {
        txtDisciplinas += "\nLaço interrompido\n";
        lacoInterrompido = true;
        break;
    }
}

if (!lacoInterrompido) {
    txtDisciplinas += `\nTotal: ${disciplinas1.length}\n\n`;

    if (disciplinas1.includes("JavaScript")) {
        txtDisciplinas += "Aluno cursa JavaScript";
    } else {
        txtDisciplinas += "Aluno não cursa JavaScript";
    }
}

confirm(txtDisciplinas);
