export const movimentacoesMock = [
  {
    id: 1,
    data: "2026-01-05",
    descricao: "Pagamento cliente",
    tipo: "entrada",
    valor: 2500,
    conta: {
      id: 1,
      nome: "Banco Inter",
    },
    formaPagamento: {
      id: 1,
      descricao: "PIX",
    },
  },
  {
    id: 2,
    data: "2026-01-06",
    descricao: "Aluguel",
    tipo: "saida",
    valor: 1200,
    conta: {
      id: 1,
      nome: "Banco Inter",
    },
    formaPagamento: {
      id: 2,
      descricao: "Boleto",
    },
  },
]
