import {ItemNewsLettersType} from '@/src/components/ItemNewsLetter/ItemNewLetters.types';

export type NewsType =  {
  title: string;
  news: ItemNewsLettersType[]
};

export type UserType = {
  id: string;
  firstName:string;
  lastName:string;
  gender: string;
  email: string;
  subscriptions: string[];
}