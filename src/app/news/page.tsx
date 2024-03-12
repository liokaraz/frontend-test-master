"use client"
import { useEffect, useState } from 'react';

import {NewsType, UserType} from './news.types';
import {NewsLettersContext} from './new.context';

import {Header} from '@/src/components/Header';
import {ListItemsNewsLetters} from '@/src/components/ListItemsNewsLetters';

import {groupNewsBySite, mapNews} from '@/src/utils/news.utils';

import headerData from '@/src/components/Header/data.json';

import {container} from '@/styled-system/patterns';

export const NewsLetters = () => {
  const [groupNews, setGroupNews] = useState<NewsType[]>();
  const [user, setUser] = useState<UserType>();


  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/api/news', {method: "GET"})
      const resultJSON = await result.json();
      const groupBySite = groupNewsBySite(resultJSON);
      setGroupNews(mapNews(groupBySite));
    } 
    fetchData();
  }, []);

  useEffect(() => {
    const fetchDataUser = async () => {
      const result = await fetch('/api/user', {method: "GET"})
      const user = await result.json();
      setUser(user);
    } 
    fetchDataUser();
  }, []);
  
  return (
    <div className={container()}>
      <Header {...headerData}/>
        <NewsLettersContext.Provider value={user}>
          {groupNews?.map((group, index) => (
            <ListItemsNewsLetters key={index} listNews={group?.news} title={group.title}/>
          )) }
        </NewsLettersContext.Provider>
    </div>
  );
};

export default NewsLetters;