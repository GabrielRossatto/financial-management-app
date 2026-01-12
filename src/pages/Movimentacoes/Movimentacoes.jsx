import { useMemo, useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Table } from "../../components/Tables/Tables";
import { movimentacoesColumns } from "./movimentacoesColumns";
import styles from "./Movimentacoes.module.css";
import { Modal } from "../../components/Modal/Modal";
import { Form } from "../../components/Forms/Form";
import { movimentacaoFields } from "./movimentacoesForm";

// mock só pra demonstrar o filtro
const movimentacoesMock = [
  { id: 1, contaId: 1, data: "2026-01-05", descricao: "Cliente", tipo: "entrada", valor: 2500 },
  { id: 2, contaId: 1, data: "2026-01-06", descricao: "Aluguel", tipo: "saida", valor: 1200 },
  { id: 3, contaId: 2, data: "2026-01-07", descricao: "Mercado", tipo: "saida", valor: 200 },
];



export function Movimentacoes() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [params] = useSearchParams();
  const navigate = useNavigate();

  const contaId = params.get("contaId"); // string ou null

  const dataFiltrada = useMemo(() => {
    if (!contaId) return movimentacoesMock;
    const id = Number(contaId);
    return movimentacoesMock.filter((m) => m.contaId === id);
  }, [contaId]);

  const handleSubmit = (values) => {
    console.log("SUBMIT MOVIMENTAÇÃO:", values);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!contaId) setIsModalOpen(false);
  }, [contaId]);

  return (
    <>
      <div className={styles.wrapper_title}>
        <h1>{contaId ? `Movimentações da conta #${contaId}` : "Movimentações"}</h1>
      </div>

      <div className={styles.btn_container}>
        {contaId && (
          <>
            <button
              className={styles.btn}
              onClick={() => navigate("/contasCadastradas")}
            >
              Voltar para contas
            </button>

            <button
              className={styles.btnPrimary}
              onClick={() => setIsModalOpen(true)}
            >
              Nova movimentação
            </button>
          </>
        )}
      </div>

      <div className={styles.headerRow}>
        <Table columns={movimentacoesColumns()} data={dataFiltrada} />
      </div>

      {contaId && (
        <Modal
          className={styles.modal }
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Nova movimentação"
        >
          <Form
            fields={movimentacaoFields}
            onSubmit={handleSubmit}
          />
        </Modal>
      )}
    </>
  );
}
