# Scrawlr Upvote Demo

A modern React application demonstrating a reusable upvote system with multiple independent lists and state persistence.

## Features

- Multiple independent upvote lists
- Maximum of 10 lists with 5 upvotes each
- Persistent state using localStorage
- Responsive layout
- Test coverage
- Built with React + TypeScript + Vite
- Modern styling with shadcn/ui and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm (v8 or higher)

### Installation

1. Clone the repository:

```bash
git clone git@github.com:kvntma/scrawlr-demo.git
cd scrawlr-demo
```

2. Install dependencies:

```bash
pnpm install
```

### Running the Application

Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

The project uses Vitest for testing. Available test commands:

- Run tests in watch mode:

```bash
pnpm test
```

- Generate test coverage report:

```bash
pnpm test:coverage
```

## Usage Instructions

1. The application displays multiple upvote lists - maximum of 10! can be changed inside constants!
2. Each list can contain up to 50 upvote buttons - can be changed inside constants!
3. Click the "+" button to add a new upvote to a list
4. Click an upvote to toggle its state:
   - Default state: Gray background (#F4F6F8) with dark arrow (#343A40)
   - Selected state: Light blue background (#E5E8FD) with blue arrow (#253CF2)
5. Each list maintains its own state independently - clicking one arrow will change the state for the whole list.

- Adding to the list will also match the list state.

6. States persist across page refreshes

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── contexts/       # React context for state management
  ├── hooks/         # Custom hooks including useUpvote
  ├── types/         # TypeScript type definitions
  └── constants/     # Application constants
```

## Technical Details

- State Management: React Context with localStorage persistence
- Styling: Tailwind CSS with shadcn/ui components
- Testing: Vitest with React Testing Library
- Build Tool: Vite
- Type Safety: TypeScript
