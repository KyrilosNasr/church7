export enum ToastrMessages {
    success = 'success',
    info = 'info',
    warn = 'warn',
    error = 'error',
    custom = 'custom'
}

export enum PriestlyRank {
  keseseia = 1,
  qomoseia = 2
}

export enum MassTypesEnum {
  mass = 1,
  preMass = 2,
  MidnightPraises = 3
}
export enum MassRepetationType {
  dialy = 1,
  monthly = 2,
  special = 3
}

export const StringIsNotNumber = (value: any) => isNaN(Number(value)) === false;
export function enumToArray(enumme: any) {
    return Object.keys(enumme)
        .filter(StringIsNotNumber)
        .map(key => ({ id: +key, name: enumme[key] }));
}

export enum GenderEnum {
  Male = 1,
  Female = 2,
  Booth = 3
}
