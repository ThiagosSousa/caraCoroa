document.getElementById('botaoJogar').onclick = () =>{
    let valor = Math.random();

    let imagem = '';

    if (valor > 0.5) {
        imagem = 'Coroa';
    } else {
        imagem = 'Cara';
    }
    
    let caminhoImagem = `Assets/Images/${imagem}.png`;
    document.getElementById('imagemMoeda').src = caminhoImagem;
    console.log(valor)

};







// let nomeAlunos = ["Lucas", "João", "Pedro", "Gustavo", "Natália"];

// // for(let i = 0; i < nomeAlunos.length; i++) {
// //     console.log('Nome do Aluno(a): ' + nomeAlunos[i]);
// // }

// let i = 0;
// while(i < nomeAlunos.length) {
//     console.log('Nome do Aluno(a): ' + nomeAlunos[i]);
//     i++;
// }
