import { useNavigate } from "react-router-dom";
import styles from "./ContasCadastradas.module.css";
import { ButtonLink } from "../../components/Buttons/ButtonLink";
import { Table } from "../../components/Tables/Tables";
import { columns } from "./contas";

const contas = [
  { id: 1, nome: "Santander", dataCriacao: "21-10-2025", saldo: 2000 },
  { id: 2, nome: "Nubank", dataCriacao: "10-11-2025", saldo: 500 },
];

export function ContasCadastradas() {
  const navigate = useNavigate();

  const onMovimentar = (conta) => {
    navigate(`/movimentacoes?contaId=${conta.id}`);
  };

  return (
    <>
      <div className={styles.wrapper_title}>
        <h1>Lista de Contas Bancárias Cadastradas</h1>

        <Table columns={columns(onMovimentar)} data={contas} />
      </div>

      <div className={styles.wrapper_button}>
        <ButtonLink to="/contasBancarias">Cadastrar Conta</ButtonLink>
      </div>
    </>
  );
}
