import {ItemNewsLetter} from '@/src/components/ItemNewsLetter';
import {ListItemsNewsLettersType} from './ListItemsNewsLetters.types';
import {ItemNewsLettersType} from '@/src/components/ItemNewsLetter/ItemNewLetters.types';

import {css} from '@/styled-system/css';
import {cq, divider, wrap  } from '@/styled-system/patterns';


export const ListItemsNewsLetters = ({listNews, title}:ListItemsNewsLettersType) => {

  return(
    <div className={cq()}>
      <h2 className={css({fontSize: {smToMd: 'medium_h2'}})}>{title}</h2>
      <div className={divider({
        orientation: 'horizontal',
        mb: '15',
        width: '70px',
        backgroundColor: 'primary',
        height: '4px',
        border: 'solid 1px primary',
        borderRadius: '10px'
        })}/>
      <div className={wrap ({margin: '0', marginInline: 'initial'})} >
        {listNews?.map((news:ItemNewsLettersType, index:number) => (
          <ItemNewsLetter
            key={index}
            id={news.id}
            image={news.image}
            description={news.description}
            title={news.title}
            site={news.site}
            subscriptions={[...news.subscriptions]}
          />
        ))
        }
      </div>
    </div>
  );
};

export default ListItemsNewsLetters;