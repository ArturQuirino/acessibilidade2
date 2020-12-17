console.log("Hello World")

let valorTotal = 0;

const adicionarNoCarrinho = (value) => {
  valorTotal += value;
  document.getElementById('valorCarrinho').innerHTML = valorTotal + ',00';
}

const removerNoCarrinho = (value) => {
  valorTotal -= value;
  document.getElementById('valorCarrinho').innerHTML = valorTotal + ',00';
}