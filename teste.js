const buscarDados = async () => {
    try {
        const response = await fetch("./teste.json");

        if (!response) {
            throw new Error("Erro ao buscar os dados")
        };

        const data = await response.json();

        return data;
    } catch (error) {
        return error.message;
    }
}

const body = document.body;

const criarElementos = (nome, itens) => {
    const container = document.createElement("div");
    container.className = "container";

    const paragraph = document.createElement("p");
    paragraph.textContent = nome;

    const items = document.createElement("p");
    items.textContent = [itens];

    container.appendChild(paragraph);
    container.appendChild(items);

    return container
}

buscarDados().then((resp) => {
    for (let c = 0; c < resp.length; c++) {
        body.appendChild(criarElementos(resp[c].nome, resp[c].itens))
    }
}).catch((error) => {
    console.log(error);
})


