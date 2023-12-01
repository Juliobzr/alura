const alunos = ["Joao", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos , medias];

function exibeNomeENota(aluno){
    const [alunos, medias] = listaDeAlunosEMedias;
    if(listaDeAlunosEMedias[0].includes(aluno)){
        const indice = alunos.indexOf(aluno);
        console.log(`O aluno ${aluno} esta na lista e sua media é ${medias[indice]}`);

    } else {
        console.log(`Aluno nao encontrado.`);
    }
}

exibeNomeENota("Juliana")