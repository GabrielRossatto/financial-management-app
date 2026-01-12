
export const contasBancariasFields = [

    {
        name: 'NomeBanco',
        label: 'Nome da Conta',
        type: 'text',
    
    },

    {
        name: 'dataCriacao',
        label: 'Data de Criação',
        type: 'text',
        format: 'date',
        placeholder: 'dd/mm/aaaa'
    },

    {
        name: 'saldoInicial', 
        label: 'Saldo Inicial',
        type: 'text',
        format: 'currency',

    }


]