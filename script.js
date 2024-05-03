const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
const todoCortes = barbearia.cortes
function buscaCortePorId(id) {
    let corteEncontrado = "Corte não encontrado"
    for (let i = 0; i < todoCortes.length; i++) {
        if (id === todoCortes[i].id) {
            corteEncontrado = todoCortes[i];
        }
    }

    return corteEncontrado
}

console.log(buscaCortePorId(2))

const todasBarbas = barbearia.barbas
function buscaBarbaPorId(id) {
    let barbaEncontrada = "Barba não encontrada"
    for (let i = 0; i < todasBarbas.length; i++) {
        if (id === todasBarbas[i].id) {
            barbaEncontrada = todasBarbas[i];
        }
    }

    return barbaEncontrada
}

console.log(buscaBarbaPorId(2))


function verificaStatusBarbearia() {
    if (barbearia.estaAberto) {
        return "Estamos abertos"
    } else {
        return "Estamos fechados"
    }
}

console.log(verificaStatusBarbearia())


function retornaTodosCortes() {
    return barbearia.cortes
}

console.log(retornaTodosCortes())


function retornaTodasBarbas() {
    return barbearia.barbas
}

console.log(retornaTodasBarbas())


function criaPedido(nomeCliente, corteId, barbaId) {
    let corte = buscaCortePorId(corteId)
    let barba = buscaBarbaPorId(barbaId)

    const pedido = {
        nome: nomeCliente,

        pedidoCorte: corte.tipo,

        pedidoCortePreco: corte.valor,

        pedidoBarba: barba.tipo,

        pedidoBarbaPreco: barba.valor,
    }
    return pedido
}
console.log(criaPedido("Gabriel", 2, 2))


function atualizarServico(lista, id, valor, tipo) {
    for(let i = 0; i < lista.length; i++){
        if(lista[i].id === id){
            lista[i].valor = valor
            lista[i].tipo = tipo
        }
    }
    return lista
}



function calculaTotal(pedido) {
    let soma = criaPedido(pedido)
    soma = pedido.pedidoBarbaPreco + pedido.pedidoCortePreco
    return soma
}



console.log(barbearia)
