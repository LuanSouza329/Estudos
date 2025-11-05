async function BuscarPaises(url) {
  try {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error("Erro ao obter moedas");

    const moedas = await resp.json();

    return moedas;
  }catch(err){
    console.log(err);
  }
}

const url = "https://api.frankfurter.app/currencies";

BuscarPaises(url).then((moeda) => {
  for (let nomeMoeda in moeda) {
    console.log( nomeMoeda, moeda[nomeMoeda]);
  }
})

