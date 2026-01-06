export const taxasMeioPagamento = [
  
    { label: 'Crédito', value: 'credito' },
    { label: 'Débito', value: 'debito' },
    { label: 'Pix', value: 'pix' }
  
]


export const formaDePagamentoFields = [
  {
    name: 'descricao',
    label: 'Descrição da Forma de Pagamento',
    type: 'text',
    placeholder: 'Crédito, Débito, Pix'
  },

  {
    name: 'banco',
    label: 'Conta Financeira Padrão',
    type: 'text',
    placeholder: 'Bradesco, Santander...'
  },

  {
    name: 'valorDebitado',
    label: 'Taxas de Meio de Pagamento',
    type: 'checkbox',
    format: 'currency',
    position: 'footer',
    options: [
      { label: 'Reais', value: 'reais' },
      { label: 'Percentual', value: 'percentual' },
    ]
 
  }

]