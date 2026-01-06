import styles from './ContasCadastradas.module.css'
import { ButtonLink } from '../../components/Buttons/ButtonLink'
import { Table } from '../../components/Tables/Tables'
import { columnsPag } from './formaPag'

  const pagamentos = [
    {
      id: 1,
      descricao: 'Pagamento cartão crédito',
      conta: 'Conta Itaú PJ',
      taxa: 2.99,
    },
    {
      id: 2,
      descricao: 'Pagamento boleto',
      conta: 'Conta Banco do Brasil',
      taxa: 1.50,
    }
]

export function MeioDePagamento() {
    return <>

        <div className={styles.wrapper_title}>
            <h1>Lista de Meios de Pagamento</h1>

            <Table
                columns={columnsPag}
                data={pagamentos}
            />

        </div>

       <div className={styles.wrapper_button}>
        <ButtonLink to="/formaDePagamento">
          Cadastrar Meio de Pagamento
        </ButtonLink>
        </div>


    </>
}