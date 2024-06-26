function calcularTotal(ferramentas, comprar) {
    if (ferramentas.length == 0 || comprar.length == 0) {
      throw new Error("Ambas as listas precisam ter ao menos um item.");
    };
  
    const ferramentasEncontradas = ferramentas.filter(ferramenta => comprar.includes(ferramenta.nome));
  
    if (ferramentasEncontradas.length == 0){
    throw new Error ("Nenhuma ferramenta desejada encontrada.");
    };
  
    let total = 0;
    const ferramentasNomes = [];
  
    for (let i = 0; i < ferramentasEncontradas.length; i++) {
      total += ferramentasEncontradas[i].preco;
      ferramentasNomes[i] = ferramentasEncontradas[i].nome; 
    };
  
    return (`O valor a pagar pelas ferramentas (${ferramentasNomes.join(", ")}) é R$ ${total.toFixed(2)}`);
    
  };
  
  module.exports = {
    calcularTotal
  };