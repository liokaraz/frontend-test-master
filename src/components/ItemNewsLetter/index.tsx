import {useContext} from 'react';

import {NewsLettersContext} from '@/src/app/news/new.context';

import {UserType} from '@/src/app/news/news.types';
import {ItemNewsLettersType} from './ItemNewLetters.types';

import ButtonItem from '@/src/components/ButtonItem';

import {css} from '@/styled-system/css';

export const ItemNewsLetter = ({
  id,
  image,
  description,
  title,
  subscriptions
}:ItemNewsLettersType) => {
  const user:UserType | undefined = useContext(NewsLettersContext);
  return (
    <div id={id} className={css({width: {smToLg:'49%', mdTo2xl: '32.45%'}, textAlign: 'center'})}>
      <div>
        <img className={css({width: '100%', height: 'auto', marginBottom: '10px'})} src={image} alt={title}/>
      </div>
      <p className={css({textAlign: 'center', padding: '5px', height: {smToMd: '100px', mdTo2xl:'67px'}, fontSize: {smToMd: 'medium'}})}>{description}</p>
      <ButtonItem itemSubscriptions={subscriptions} userSubcriptions={user?.subscriptions} />
    </div>
  );
}

export default ItemNewsLetter;