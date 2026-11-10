/*async function carregarPalavras() {
  const resposta = await fetch("palavras.json");
  const palavras = await resposta.json();

  const indice = Math.floor(Math.random() * palavras.length);
  const palavra = palavras[indice];

  return palavra;
}

let listaDePalavras = [];

async function carregarLista() {
  const resposta = await fetch("palavras.json");
  listaDePalavras = await resposta.json();
}

function palavra_existe(palavra) {
  // Verifica se a palavra exata existe na lista (Retorna true ou false)
  return listaDePalavras.includes(
    palavra.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  );
}*/

async function pegarPalavraDeCincoLetras() {
  let palavra = "";
  
  // O código continua tentando até achar uma com 5 letras
  while (palavra.length !== 5) {
    const response = await fetch('https://dicionario-aberto.net');
    const data = await response.json();
    palavra = data.word;
  }
  
  console.log("Palavra de 5 letras encontrada:", palavra);
}