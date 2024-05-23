// Inicializa um map
const storage = new Map();
// Inicializa um array de produtos, cada um possuindo nome e categoria
const products = [
    { nome: "Maçã", categoria: "Fruta"},
    { nome: "Cenoura", categoria: "Legume"},
    { nome: "Banana", categoria: "Fruta"},
    { nome: "Chuchu", categoria: "Legume"},
    { nome: "Monitor", categoria: "Eletrônico"},
    { nome: "Notebook", categoria: "Eletrônico"},

]

// Função recebe um map e a lista de produtos, e não retorna nada
// para alterar os dados a partir de passagem de referência
function insertProductsGroupedByCategory(storage, products) {
    // Para cada produto no array
    for (const product of products) {
        // Busca no map o array de produtos de acordo com a categoria do produto atual
        let currentProductsInCategory = storage.get(product.categoria);
        
        //Caso a categoria não tenha nenhum produto ainda, atribui um array vazio para a variável
        if (!currentProductsInCategory) currentProductsInCategory = [];

        // Adiciona o nome do produto no array
        currentProductsInCategory.push(product.nome)
        // Atualiza o valor da chave (categoria) no map
        storage.set(product.categoria, currentProductsInCategory)
    }
}

// Chama a função passando o map e o array de produtos
insertProductsGroupedByCategory(storage, products);

console.log(storage)