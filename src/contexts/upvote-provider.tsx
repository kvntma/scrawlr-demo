import * as React from 'react';
import type { UpvoteState, UpvoteList } from '@/types/upvote';
import { STORAGE_KEY, defaultState, MAX_UPVOTES_PER_LIST } from '@/constants/upvote';
import { nanoid } from 'nanoid';
import { UpvoteContext } from './upvote-context';

export function UpvoteProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<UpvoteState>(() => {
    const savedState = localStorage.getItem(STORAGE_KEY);
    return savedState ? JSON.parse(savedState) : defaultState;
  });

  React.useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const toggleUpvoteList = React.useCallback((listId: string) => {
    setState(prev => ({
      ...prev,
      lists: prev.lists.map(list =>
        list.id === listId ? { ...list, isSelected: !list.isSelected } : list
      ),
    }));
  }, []);

  const addUpvoteToList = React.useCallback((listId: string) => {
    setState(prev => ({
      ...prev,
      lists: prev.lists.map(list =>
        list.id === listId && list.upvoteCount < MAX_UPVOTES_PER_LIST
          ? { ...list, upvoteCount: list.upvoteCount + 1 }
          : list
      ),
    }));
  }, []);

  const createNewList = React.useCallback(() => {
    const newList: UpvoteList = {
      id: nanoid(),
      upvoteCount: 1,
      isSelected: false,
    };
    setState(prev => ({
      ...prev,
      lists: [...prev.lists, newList],
    }));
  }, []);

  const value = React.useMemo(
    () => ({
      state,
      toggleUpvoteList,
      addUpvoteToList,
      createNewList,
    }),
    [state, toggleUpvoteList, addUpvoteToList, createNewList]
  );

  return <UpvoteContext.Provider value={value}>{children}</UpvoteContext.Provider>;
}
