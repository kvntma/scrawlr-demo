import type { UpvoteState } from '@/types/upvote';
import { nanoid } from 'nanoid';

export const STORAGE_KEY = 'upvote-lists-state';
export const MAX_LISTS = 10;
export const MAX_UPVOTES_PER_LIST = 50;

// Colors
export const COLORS = {
  default: {
    background: '#F4F6F8',
    arrow: '#343A40',
  },
  selected: {
    background: '#E5E8FD',
    arrow: '#253CF2',
  },
} as const;

// Create 3 default lists with unique IDs
const defaultLists = Array.from({ length: 3 }, () => ({
  id: nanoid(),
  upvoteCount: 1,
  isSelected: false,
}));

export const defaultState: UpvoteState = {
  lists: defaultLists,
};
