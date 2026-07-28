async function carregarPalavras() {
  const resposta = await fetch("palavras.json");
  const palavras = await resposta.json();

  const indice = Math.floor(Math.random() * palavras.length);
  const palavra = palavras[indice];

  return palavra;
}

let listaDePalavras = [];

async function carregarLista() {
    const resposta = await fetch("/palavras.json");
    listaDePalavras = await resposta.json();
}

async function palavra_existe(palavra) {
    // Verifica se a palavra exata existe na lista (Retorna true ou false)
    return listaDePalavras.includes(palavra_aux);
}

await carregarLista();
