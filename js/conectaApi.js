async function videosList() {
    const conexao = await fetch("http://localhost:3000/videos");
    const data = await conexao.json();

    return data;
}

async function newVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    const data = conexao.json();

    return data;
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const data = await conexao.json();

    return data;
}

export const conectaApi = {
    videosList,
    newVideo,
    buscaVideo
}