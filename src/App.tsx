import { Button } from '@/components/ui/button';
import { UpvoteList } from '@/components/upvote-list';
import { UpvoteProvider } from '@/contexts/upvote-provider';
import { useUpvote } from '@/hooks/use-upvote';
import { MAX_LISTS } from '@/constants/upvote';

function UpvoteApp() {
  // Hook with context provider for functions to interact with the upvote lists being passed through as props as per instructions.
  const { state, toggleUpvoteList, addUpvoteToList, createNewList } = useUpvote();

  // Can move this to a separate component if needed but for simplicity, keeping it here.

  return (
    <main className="container mx-auto p-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Upvote Lists</h1>
        <Button onClick={createNewList} disabled={state.lists.length >= MAX_LISTS}>
          Create New List
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        {state.lists.map(list => (
          <UpvoteList
            key={list.id}
            listId={list.id}
            upvoteCount={list.upvoteCount}
            isSelected={list.isSelected}
            onToggle={() => toggleUpvoteList(list.id)}
            onAdd={() => addUpvoteToList(list.id)}
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
          />
        ))}
      </div>
    </main>
  );
}

export default function App() {
  return (
    <UpvoteProvider>
      <UpvoteApp />
    </UpvoteProvider>
  );
}
