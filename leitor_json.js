async function carregarPalavras() {
    const resposta = await fetch("palavras.json");
    const palavras = await resposta.json();

    const indice = Math.floor(Math.random() * palavras.length);
    const palavra = palavras[indice];

    console.log(palavra);
}

carregarPalavras();