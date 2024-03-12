import {ItemNewsLettersType} from '@/src/components/ItemNewsLetter/ItemNewLetters.types';
import {NewsType} from '@/src/app/news/news.types';
import groupBy  from 'lodash/groupBy';

export const checkRight = (itemsRight: string, userRights: string[]):boolean => userRights?.includes(itemsRight);

export const groupNewsBySite = (listNews: ItemNewsLettersType[]):Object => groupBy(listNews, 'site');

export const mapNews = (newsObject:Object):NewsType[] => 
  Object.entries(newsObject).map(([key, value]) => ({ 
    title: key,
    news: value
  }));
  
