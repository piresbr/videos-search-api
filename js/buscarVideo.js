import { conectaApi } from "./conectaApi.js";
import cardBuilder from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild); //remove todos os itens, depois no foreach ele cria somente os cards com o resultado
    }

    busca.forEach(elemento => lista.appendChild(
        cardBuilder(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))
