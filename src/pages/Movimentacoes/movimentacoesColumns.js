import styles from "./Movimentacoes.module.css"
import { isCurrency } from "../../components/utils/Currency/isCurrency"

export const movimentacoesColumns = () => [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "data",
    label: "Data",
  },
  {
    key: "descricao",
    label: "Descrição",
  },
  {
    key: "tipo",
    label: "Tipo",
    render: (row) => (
      <span
        className={
          row.tipo === "entrada"
            ? styles.badgeEntrada
            : styles.badgeSaida
        }
      >
        {row.tipo === "entrada" ? "+ Entrada" : "– Saída"}
      </span>
    ),
  },
  {
    key: "valor",
    label: "Valor",
    render: (row) => isCurrency(row.valor),
  },
  {
    key: "conta",
    label: "Conta Bancária",
    render: (row) => row.conta?.nome || "-",
  },
  {
    key: "formaPagamento",
    label: "Forma de Pagamento",
    render: (row) => row.formaPagamento?.descricao || "-",
  },
]
