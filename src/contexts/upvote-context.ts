import { createContext } from 'react';
import type { UpvoteContextType } from '@/types/upvote';

export const UpvoteContext = createContext<UpvoteContextType | undefined>(undefined);
UpvoteContext.displayName = 'UpvoteContext';
