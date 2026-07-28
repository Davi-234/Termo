async function carregarPalavras() {
    const resposta = await fetch("palavras.json");
    const palavras = await resposta.json();

    const indice = Math.floor(Math.random() * palavras.length);
    const palavra = palavras[indice];

    return palavra;
}

function palavra_existe(palavra) {
        let palavra_aux = "";

        palavra.forEach(letra => {
            palavra_aux += letra;
        });

        // Busca se a palavras existe na lista de palavras JSON

        // Converte o json em texo
        try {
            // Busca o arquivo JSON via rede (pode ser um caminho local ou uma URL)
            const resposta = await fetch('/palavras.json');

            // Converte a resposta diretamente para um array JavaScript
            const listaDePalavras = await resposta.json();

            // Verifica se a palavra exata existe na lista (Retorna true ou false)
            return listaDePalavras.includes(palavra_aux);
        } catch (erro) {
            console.error("Erro ao buscar o arquivo JSON:", erro);
            return false;
        }
    }