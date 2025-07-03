import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Upvote } from './upvote';

describe('Upvote', () => {
  it('should call onToggle when clicked', () => {
    // Arrange
    const onToggle = vi.fn();
    render(<Upvote onToggle={onToggle} />);

    // Act
    const upvoteButton = screen.getByRole('button');
    fireEvent.click(upvoteButton);

    // Assert
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it('should display different styles based on selection state', () => {
    // Arrange
    const { rerender } = render(<Upvote isSelected={false} />);
    const upvoteButton = screen.getByRole('button');

    // Assert - unselected state
    expect(upvoteButton).toHaveClass('bg-[#F4F6F8]');

    // Act - change to selected state
    rerender(<Upvote isSelected={true} />);

    // Assert - selected state
    expect(upvoteButton).toHaveClass('bg-[#E5E8FD]');
  });
});
