# Docket – Task Management Dashboard

A clean, responsive task management dashboard built with **React** and **Tailwind CSS**. Add, edit, delete, search, filter and sort your tasks. Everything is saved in your browser, so your tasks are still there after a refresh.


## Features

- **Add, edit and delete tasks** with title, description, priority, status and due date
- **Dashboard summary cards** showing Total, To Do, In Progress and Done counts
- **Search** tasks by title
- **Filter** by status (Todo / In Progress / Done) and priority (High / Medium / Low)
- **Sort** by due date, priority or newest first
- **Color-coded badges** for priority and status
- **Empty states** for "no tasks yet" and "no tasks match your filters", with a one-click *Clear Filter* button
- **Persistent data** using `localStorage`
- **Fully responsive** layout for mobile, tablet and desktop

## Tech Stack

- [React](https://react.dev/) (Hooks: `useState`, `useReducer`, `useEffect`)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) for icons

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/waleedkhanse10/docket-task-dashboard.git
cd docket-task-dashboard

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── badges/
│   │   ├── PriorityBadge.jsx
│   │   └── statusBadge.jsx
│   ├── AddTask.jsx        # Add / edit task modal form
│   ├── Navbar.jsx
│   ├── Summary.jsx        # Dashboard counts
│   ├── SummaryCard.jsx
│   ├── TaskCard.jsx
│   ├── TasksGrid.jsx      # Task list + empty states
│   └── Toolbar.jsx        # Search, filters, sorting
├── App.jsx                # Reducer, state and main logic
├── index.css
└── main.jsx
```

## How It Works

- Task state is managed with `useReducer`. The reducer handles `ADD_TASK`, `UPDATE_TASK`, `DELETE_TASK` and `CHANGE_STATUS`.
- Tasks are loaded from `localStorage` on start and saved again on every change.
- Search, filter and sort are applied on a copy of the tasks array, so the original data is never changed.
- The same modal form (`AddTask`) is used for both adding and editing a task.

## Author

**Waleed Khan**

- GitHub: [@waleedkhanse10](https://github.com/waleedkhanse10)
