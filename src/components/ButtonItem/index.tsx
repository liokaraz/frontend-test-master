import {ButtonItemType} from './ButtonItem.types';

import {checkRight} from '@/src/utils/news.utils';
import {BUTTON_NEWS_VALUES} from '@/src/utils/constant';

import {css} from '@/styled-system/css';


export const ButtonItem = ({itemSubscriptions, userSubcriptions}:ButtonItemType) => {
  return (
    itemSubscriptions?.map((sub, index) => {
      const hasRight = checkRight(sub, userSubcriptions as string[]);
      if (hasRight) {
        return (
          <button key={index} className={css({
            background: 'primary',
            color: 'white',
            fontSize:{smToMd: 'medium_button', mdTo2xl: 'default_button'}})}>
            {BUTTON_NEWS_VALUES.INSCRIPTION}
          </button>
          )
      } else {
        return (
          <button key={index} className={css({
            background: 'secondary',
            fontSize:{smToMd: 'medium_button',
            mdTo2xl: 'default_button'}})}>
            {BUTTON_NEWS_VALUES.ABONNEMENT}
          </button>
        )
      }
      
    })
  )
  
};

export default ButtonItem;