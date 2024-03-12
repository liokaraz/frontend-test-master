import { createContext } from 'react';

import {UserType} from './news.types';

export const NewsLettersContext = createContext<UserType | undefined>(undefined);

