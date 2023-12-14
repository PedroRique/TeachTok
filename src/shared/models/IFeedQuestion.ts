import { IOption } from './IOption';
import { IUser } from './IUser';

export interface IFeedQuestion {
  description: string;
  id: number;
  image: string;
  options: IOption[];
  playlist: string;
  question: string;
  type: string;
  user: IUser;
}
