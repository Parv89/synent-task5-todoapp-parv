# TaskFlow – React To-Do List

> A modern, responsive, and professional productivity web application designed to help you organize your day, one task at a time. Built for the Synent Technologies Web Development Internship (Task 5).

---

## Description

**TaskFlow** is an elegant, client-side productivity dashboard designed with focus, minimalism, and speed in mind. It eliminates digital clutter and delivers a fluid user experience for capturing, organizing, editing, and tracking daily tasks. 

TaskFlow is engineered purely with modern **React 19**, **Vite**, vanilla **CSS3 custom properties**, and browser **localStorage**—with zero external backend, zero database, zero authentication, and zero third-party API dependencies.

---

## Key Features

- **Task Creation**: Add tasks instantly via the intuitive input field or by pressing the `Enter` key.
- **Input Validation**: Whitespace trimming with real-time feedback preventing empty task submissions.
- **Task Completion**: Toggle completion with custom accessible checkboxes, dynamic strike-through styling, and status indicators.
- **Inline Task Editing**: Edit existing tasks in-place with instant focus, `Enter` to save, and `Escape` to cancel.
- **Task Deletion**: Safely delete tasks with clear visual feedback.
- **Productivity Dashboard & Statistics**: Real-time counters showing Total Tasks, Active Tasks, Completed Tasks, and a percentage progress bar.
- **Filter Controls**: View tasks across three modes:
  - **All**: Displays your complete task list with count badges.
  - **Active**: Shows only tasks pending completion.
  - **Completed**: Reviews finished tasks and accomplishments.
- **Clear Completed**: Bulk remove all finished tasks with a single click; gracefully disabled when no tasks are completed.
- **Context-Aware Empty States**: Clean illustrations and encouraging messages tailored to each active filter view.
- **Browser Persistence**: Tasks are saved automatically to `localStorage` and remain intact after browser reloads or restarts.
- **Fully Responsive & Accessible**: Flawless layout across mobile (375px–480px), tablet (768px–1024px), and large desktop displays (1440px–1920px).

---

## Technology Stack

| Technology | Purpose |
|---|---|
| **React 19** | Component-driven UI architecture and declarative state management |
| **Vite** | Blazing-fast frontend build tooling and development server |
| **JavaScript (ES6+)** | Modern functional programming patterns, hooks, and array manipulation |
| **HTML5** | Semantic markup, accessible labels (`aria-*`), and keyboard navigation |
| **CSS3** | Modern custom properties (design tokens), flexbox, CSS grid, and micro-interactions |
| **Browser LocalStorage** | Reliable client-side persistence with defensive JSON parsing |

---

## Project Structure

```
synent-task5-todoapp-parv/
├── index.html                  # HTML5 entry document & metadata
├── package.json                # Project dependencies and Vite scripts
├── vite.config.js              # Vite configuration
├── README.md                   # Project documentation & overview
└── src/
    ├── main.jsx                # Application root rendering
    ├── App.jsx                 # Central state coordinator & event handlers
    ├── App.css                 # Application styles, component styles, and media queries
    ├── index.css               # Global typography, color tokens, and CSS resets
    ├── components/
    │   ├── Header.jsx          # Brand logo, title, and productivity completion bar
    │   ├── TaskInput.jsx       # Add task input, validation alert, and submit button
    │   ├── TaskStats.jsx       # Metric cards: Total, Active, and Completed tasks
    │   ├── TaskFilters.jsx     # Filter buttons (All, Active, Completed) & Clear Completed
    │   ├── TaskList.jsx        # Container mapping tasks or rendering EmptyState
    │   ├── TaskItem.jsx        # Interactive task card (check, edit, timestamp, delete)
    │   └── EmptyState.jsx      # Contextual empty state illustrations
    └── utils/
        └── storage.js          # Resilient localStorage serializer with corruption safety
```

---

## How to Install

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
- [npm](https://www.npmjs.com/) (version 9.0 or higher)

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/parv-internship/synent-task5-todoapp-parv.git
   cd synent-task5-todoapp-parv
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

---

## How to Run

### Development Mode
To start the local Vite development server with hot module replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port specified in terminal).

### Production Build
To create an optimized, minified production build:
```bash
npm run build
```

### Preview Production Build
To locally test the production bundle:
```bash
npm run preview
```

---

## How LocalStorage Works

TaskFlow ensures zero data loss using the browser's native `window.localStorage`:

1. **Storage Key**: Tasks are stored under a dedicated key: `taskflow_tasks_v1`.
2. **Lazy State Initialization**: When the application loads, `useState(() => loadTasksFromStorage())` reads from `localStorage` once during mount, preventing redundant reads.
3. **Defensive Parsing & Validation**:
   - The stored JSON is validated inside a `try/catch` block.
   - If the data is missing or corrupted, it falls back to an empty array without crashing.
   - Individual task objects are validated to ensure `id`, `text`, `completed`, and `createdAt` properties exist in valid types.
4. **Reactive Synchronization**: An optimized `useEffect` hook listens to mutations on the `tasks` state and commits the updated array using `JSON.stringify()`.
5. **No Network Latency**: Because storage is client-side, changes persist instantaneously even when offline.

---

## Available Features & Keyboard Shortcuts

- **Enter**: Submit new task (in input field) or save changes (in edit mode).
- **Escape**: Cancel active inline task editing without saving changes.
- **Space / Enter on Checkbox**: Toggle task completion status.
- **Responsive Touch Targets**: Buttons and checkboxes are sized for easy interaction on touch devices.

---

## Responsive Design

TaskFlow is designed mobile-first and tested rigorously across standard screen viewports:

- **Mobile Phones (375px – 480px)**: Compact, single-column dashboard cards, touch-optimized button sizes, full-width inputs, and zero horizontal scrolling.
- **Tablets (768px – 1024px)**: Adaptive 3-column statistics grid, fluid spacing, and responsive action toolbars.
- **Laptops & Desktops (1440px – 1920px)**: Centered max-width container (`900px`) providing comfortable readability, spacious card paddings, and subtle hover elevations.

---

## Internship Information

- **Company**: Synent Technologies
- **Internship**: Web Development Internship
- **Project**: Task 5 – To-Do List Web App
- **Project Name**: TaskFlow – React To-Do List
- **Developer**: Parv

---

## GitHub Information

- **Repository Name**: `synent-task5-todoapp-parv`
- **Visibility**: Public
- **Development Commit Sequence**:
  1. `Initial React Vite project setup`
  2. `Build TaskFlow UI and task input`
  3. `Implement add/edit/delete/complete functionality`
  4. `Add localStorage, filters and statistics`
  5. `Add responsive design, animations and final polish`

---

## Future Improvements

- [ ] Task drag-and-drop reordering.
- [ ] Task categorization / tags (e.g., Work, Personal, Study).
- [ ] Due dates and reminder notifications.
- [ ] Dark/Light mode toggle switch.
- [ ] Export tasks as JSON / CSV.
