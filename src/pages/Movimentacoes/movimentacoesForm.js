import { contasBancariasFields } from "../../pages/ContasBancarias/formConfig"
import { formaDePagamentoFields } from "../../pages/FormaDePagamento/formConfig";

export const movimentacaoFields = [

  {
    name: "formaPagamentoId",
    label: "Forma de pagamento",
    type: "select",
    required: true,
    options: formaDePagamentoFields.map((forma) => ({
      value: forma.id,
      label: forma.descricao,
    })),
  },
{
  name: "tipo",
  label: "Tipo",
  type: "radio",
  required: true,
  options: [
    { value: "entrada", label: "Entrada" },
    { value: "saida", label: "Saída" },
  ],
},

  {
    name: "data",
    label: "Data",
    type: "date",
    
    required: true,
  },
  {
    name: "descricao",
    label: "Descrição",
    type: "text",
    placeholder: "Ex: Pagamento cliente, Aluguel, Mercado...",
    required: true,
  },
  {
    name: "valor",
    label: "Valor",
    type: "number",
    placeholder: "0,00",
    required: true,
  },
  {
    name: "pago",
    label: "Movimentação paga?",
    type: "checkbox",
  },
];
