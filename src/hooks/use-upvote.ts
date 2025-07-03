import { useContext } from 'react';
import { UpvoteContext } from '@/contexts/upvote-context';
import type { UpvoteContextType } from '@/types/upvote';

export function useUpvote(): UpvoteContextType {
  const context = useContext(UpvoteContext);

  if (!context) {
    throw new Error(
      'useUpvote must be used within a UpvoteProvider. ' +
        'Wrap a parent component in <UpvoteProvider> to fix this error.'
    );
  }

  return context;
}
