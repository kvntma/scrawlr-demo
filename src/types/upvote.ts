export interface UpvoteList {
  id: string;
  upvoteCount: number;
  isSelected: boolean;
}

export interface UpvoteState {
  lists: UpvoteList[];
}

export interface UpvoteContextType {
  state: UpvoteState;
  toggleUpvoteList: (listId: string) => void;
  addUpvoteToList: (listId: string) => void;
  createNewList: () => void;
}
