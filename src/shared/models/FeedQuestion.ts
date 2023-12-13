export interface IFeedQuestion {
  description: string;
  id: number;
  image: string;
  options: Option[];
  playlist: string;
  question: string;
  type: string;
  user: User;
}

export interface Option {
  answer: string;
  id: string;
}

export interface User {
  avatar: string;
  name: string;
}
