export function getExperience (type: string): string | undefined {
  switch (type) {
    case '0':
      return 'Meses de experiencia';
    case '1':
      return 'Entre 1 a 5 anos';
    case '2':
      return 'Entre 5 a 10 anos';
    case '3':
      return 'Mais de 10 anos';
    default:
      return undefined;
  }
}
