export enum CountType {
  COUNT_ADD = 'COUNT_ADD',
}

interface CountAdd {
  type: CountType.COUNT_ADD;
  payload?: number;
}

export type CountAction = CountAdd;
