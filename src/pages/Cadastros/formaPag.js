
export const columnsPag = [
    {
        key: 'id', 
        label: 'ID'

    },    
    {
      key: 'descricao',
      label: 'Descrição',
    },
    {
      key: 'conta',
      label: 'Conta do Banco',
    },
    {
      key: 'taxa',
      label: 'Taxa',
      render: (pagamento) => `${pagamento.taxa}%`,
    }

]