export function parseCurrency(value = '') {
  return value.replace(/\D/g, '')
}