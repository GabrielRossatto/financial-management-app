import { useState } from 'react';
import styles from './ContasCadastradas.module.css';
import { ButtonLink } from '../../components/Buttons/ButtonLink';
import { Table } from '../../components/Tables/Tables';
import { columns } from './contas';
import { Modal } from '../../components/Modal/Modal';
import { fieldsMovimentacao } from './fieldsMovimentacao';
import { Form } from '../../components/Forms/Form'
import { isCurrency } from '../../components/utils/Currency/isCurrency';

const contas = [
  {
    id: 1,
    nome: "Santander",
    dataCriacao: '21-10-2025',
    saldo: 2000
  }
];

export function ContasCadastradas() {
        
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedConta, setSelectedConta] = useState(null);

  const handleMovimentar = (conta) => {
    setSelectedConta(conta);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedConta(null);
  };

  return (
    <>
      <div className={styles.wrapper_title}>
        <h1>Lista de Contas Bancárias Cadastradas</h1>

        <Table
          columns={columns(handleMovimentar)}
          data={contas}
        />
      </div>

      <div className={styles.wrapper_button}>
        <ButtonLink to="/contasBancarias">
          Cadastrar Conta
        </ButtonLink>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Movimentações"
      >
        {selectedConta && (
          <>
            <p><strong>Conta:</strong> {selectedConta.nome}</p>
            <p><strong>Saldo atual:</strong> {isCurrency(selectedConta.saldo)}</p>
            <Form
                fields={fieldsMovimentacao}
                onSubmit={(data) => {
                console.log(data);
                setIsModalOpen(false);
                }}
                submitLabel="Salvar"
                onCancel={() => setIsModalOpen(false)}
                variant="modal"
            />
          </>
        )}
      </Modal>
    </>
  );
}