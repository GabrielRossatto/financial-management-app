export const isCurrency = (value) => {
  // Garante que se o valor vier nulo ou vazio, retorne R$ 0,00
  const amount = value || 0;
  
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount);
};