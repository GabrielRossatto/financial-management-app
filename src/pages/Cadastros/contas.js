import { isCurrency } from '../../components/utils/Currency/isCurrency'
export const columns = (onMovimentar) => [
  { key: 'id', label: 'ID' },
  { key: 'nome', label: 'Nome' },
  { key: 'dataCriacao', label: 'Data de Criação' },
  {
    key: 'saldo',
    label: 'Saldo Inicial',
    render: (row) => isCurrency(row.saldo)
  },
  {
    key: 'acoes',
    label: 'Ações',
    render: (conta) => (
      <button onClick={() => onMovimentar(conta)}>
        Movimentar
      </button>
    ),
  },
];