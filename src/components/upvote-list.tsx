import * as React from 'react';
import { cn } from '@/lib/utils';
import { Upvote } from './ui/upvote';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { MAX_UPVOTES_PER_LIST } from '@/constants/upvote';

export interface UpvoteListProps extends React.HTMLAttributes<HTMLDivElement> {
  listId: string;
  isSelected?: boolean;
  onToggle?: () => void;
  onAdd?: () => void;
  upvoteCount: number;
}

export function UpvoteList({
  className,
  listId,
  isSelected = false,
  onToggle,
  onAdd,
  upvoteCount,
  ...props
}: UpvoteListProps) {
  return (
    <div className={cn('flex min-h-[76px] items-start gap-4 p-4', className)} {...props}>
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: upvoteCount }).map((_, index) => (
          <Upvote key={`${listId}-${index}`} isSelected={isSelected} onToggle={onToggle} />
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={onAdd}
        disabled={upvoteCount >= MAX_UPVOTES_PER_LIST}
        className="ml-auto self-start rounded-full"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
