// Método simples de adicionar um título ao site
document.getElementById('titulo').innerText = 'Produto à Venda';

// Método complexo de adicionar um produto ao container
const produtoContainer = document.getElementById('produto-container');

// Criando elementos HTML para representar um produto
const produto = document.createElement('div');
produto.classList.add('produto');

const nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Notebook Gamer';

const descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'Notebook Gamer Acer Nitro 5.';

const precoProduto = document.createElement('p');
precoProduto.innerText = 'Preço: R$ 4998,99';

const imagemProduto = document.createElement('img');
imagemProduto.src = './img/notebook-img.jpg';
imagemProduto.alt = 'Notebook Acer';

// Adicionando os elementos filhos ao produto
produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);
produto.appendChild(imagemProduto);

// Adicionando o produto ao container
produtoContainer.appendChild(produto);