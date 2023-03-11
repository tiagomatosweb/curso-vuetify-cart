





export const formatPrice = (number) => {
  return new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
  ).format(number);
}
