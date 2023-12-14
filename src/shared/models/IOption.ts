export interface IOption {
  answer: string;
  id: string;
}

export interface IOptionWithResult extends IOption {
  isCorrect: boolean;
  isSelected: boolean;
}
