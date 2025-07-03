import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { ArrowUp } from 'lucide-react';

export interface UpvoteProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean;
  onToggle?: () => void;
}

const Upvote = forwardRef<HTMLButtonElement, UpvoteProps>(
  ({ className, isSelected = false, onToggle, ...props }, ref) => {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          'h-10 w-10 rounded-md transition-colors',
          isSelected ? 'bg-[#E5E8FD] hover:bg-[#E5E8FD]/90' : 'bg-[#F4F6F8] hover:bg-[#F4F6F8]/90',
          className
        )}
        onClick={onToggle}
        ref={ref}
        {...props}
      >
        <ArrowUp className={cn('h-6 w-6', isSelected ? 'text-[#253CF2]' : 'text-[#343A40]')} />
      </Button>
    );
  }
);
Upvote.displayName = 'Upvote';

export { Upvote };
