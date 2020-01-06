import {Company} from './company';
import {Address} from './address';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface UserFunc {
  getName: () => string;
  getCompany?: () => Company;
}
