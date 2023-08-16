class CaixaDaLanchonete {
  constructor() {
    this.menu = {
      cafe: {
        descricao: "Café",
        preco: 3,
      },
      chantily: {
        descricao: "Chantily (extra do Café)",
        preco: 1.5,
      },
      suco: {
        descricao: "Suco Natural",
        preco: 6.2,
      },
      sanduiche: {
        descricao: "Sanduíche",
        preco: 6.5,
      },
      queijo: {
        descricao: "Queijo (extra do Sanduíche",
        preco: 2.0,
      },
      salgado: {
        descricao: "Salgado",
        preco: 7.25,
      },
      combo1: {
        descricao: "1 Suco e 1 Sanduíche",
        preco: 9.5,
      },
      combo2: {
        descricao: "1 Café e 1 Sanduíche",
        preco: 7.5,
      },
    };
  }

  calcularValorDaCompra(metodoDePagamento, itens) {
    let total = 0;
    let pedido = [];
    let codigo = "";
    let valor = 0;
    let quantidade = 0;
    let temCafe = false;
    let temSanduiche = false;

    if (itens.length === 0) {
      return "Não há itens no carrinho de compra!";
    }

    if (
      metodoDePagamento === "debito" ||
      metodoDePagamento === "dinheiro" ||
      metodoDePagamento === "credito"
    ) {
    } else {
      return "Forma de pagamento inválida!";
    }

    for (let item of itens) {
      pedido = item.split(",");
      codigo = pedido[0];
      quantidade = Number(pedido[1]);

      if (quantidade === 0) {
        return "Quantidade inválida!";
      }

      if (this.menu[codigo] === undefined || this.menu[codigo] === "") {
        return "Item inválido!";
      }

      valor = this.menu[codigo].preco;

      if (codigo === "cafe") {
        temCafe = true;
      } else if (codigo === "sanduiche") {
        temSanduiche = true;
      }

      if (codigo === "chantily") {
        if (!temCafe) {
          return "Item extra não pode ser pedido sem o principal";
        }
      } else if (codigo === "queijo") {
        if (!temSanduiche) {
          return "Item extra não pode ser pedido sem o principal";
        }
      }

      total += quantidade * valor;
    }

    if (metodoDePagamento === "dinheiro") {
      total *= 0.95;
    } else if (metodoDePagamento === "credito") {
      total *= 1.03;
    }

    return `R$ ${total.toFixed(2).replace(".", ",")}`;
  }
}

export { CaixaDaLanchonete };
