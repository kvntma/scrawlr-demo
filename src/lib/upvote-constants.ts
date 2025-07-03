import type { UpvoteState } from './types';
import { nanoid } from 'nanoid';

export const STORAGE_KEY = 'upvote-lists-state';

export const MAX_LISTS = 10;
export const MAX_UPVOTES_PER_LIST = 50;

// Create 3 default lists with unique IDs
const defaultLists = Array.from({ length: 3 }, () => ({
  id: nanoid(),
  upvoteCount: 1,
  isSelected: false,
}));

export const defaultState: UpvoteState = {
  lists: defaultLists,
};
