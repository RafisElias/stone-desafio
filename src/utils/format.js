export function translateGender(gender) {
  const genders = {
    male: 'Masculino',
    female: 'Feminino',
    unknown: 'Desconhecido',
    'n/a': 'Sem informações',
  };
  return genders[gender] || 'Sem informações';
}

export function formatHeight(height) {
  const formatCentimetersToMeters = Number(height) / 100;
  const formatToString = Intl.NumberFormat('pt-br', {
    minimumFractionDigits: 2,
  }).format(formatCentimetersToMeters);

  return `${formatToString} m`;
}

export function formatNumber(number) {
  return new Intl.NumberFormat('pt-br', { notation: 'compact' }).format(number);
}
