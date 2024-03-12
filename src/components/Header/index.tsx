import {HeaderProps} from './Header.types';
import {css} from '@/styled-system/css';
import {container, vstack } from '@/styled-system/patterns';

export const Header = ({title, description}:HeaderProps) => (
    <div className={container ({backgroundColor: 'grey_light', p: '10', mb: '15'})}>
      <div className={vstack ({gap: '5'})}>
        <h1 className={css({fontSize: {smToMd: 'medium_h1'}})}>{title}</h1>
        <p className={css({textAlign: 'center', fontSize: {smToMd: 'medium'}})}>{description}</p>
      </div>
    </div>
);

export default Header;
