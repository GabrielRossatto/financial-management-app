export function formatCurrency(value = 0) {
  return (Number(value) / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}