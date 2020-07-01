document.getElementById('botaoJogar').onclick = () =>{
    const jogadorCara = element("jogadorCara").value;
    const jogadorCoroa = element("jogadorCoroa").value;

    if(jogadorCara == '' || jogadorCoroa == '') {
        return alert('Digite os nomes!!');
    }
    
    const valor = Math.random();

    let imagem = '';
    let nomeVencedor = '';
    
    if (valor > 0.5) {
        imagem = 'Coroa';
        nomeVencedor = jogadorCoroa;
    } else {
        imagem = 'Cara';
        nomeVencedor = jogadorCara;
    }
    
    const caminhoImagem = `Assets/Images/${imagem}.png`;
    element('imagemMoeda').src = caminhoImagem;
    alert(nomeVencedor);
};

function element(id){
    return document.getElementById(id);
}





// let nomeAlunos = ["Lucas", "João", "Pedro", "Gustavo", "Natália"];

// for(let i = 0; i < nomeAlunos.length; i++) {
//     console.log('Nome do Aluno(a): ' + nomeAlunos[i]);
// }

// let i = 0;
// while(i < nomeAlunos.length) {
//     console.log('Nome do Aluno(a): ' + nomeAlunos[i]);
//     i++;
// }
