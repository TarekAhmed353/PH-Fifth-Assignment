# Dev Stack Builder

A single-page React app for browsing web development technologies and assembling a personal stack. Pick from fourteen technologies across frontend, backend, database, language, styling, DevOps and tooling, and watch your selections build up in a live sidebar.

**Live site:** https://ph5-dev-stack-builder-tarek.netlify.app

**Repository:** https://github.com/TarekAhmed353/PH-Fifth-Assignment

## Technology used

- React 19 with TypeScript
- Vite
- Tailwind CSS v4 and DaisyUI 5
- React Toastify
- JSON for the technology data

## Features

**Build a stack without duplicates.** Clicking "Add to Stack" moves a technology into the sidebar, updates the live count, outlines the card in pink and disables its button so the same item cannot be added twice.

**Remove one item or clear everything.** Each entry in the sidebar has its own ✕ button, and a "Remove All" button empties the stack in one click. Removing a technology re-enables its card immediately.

**Feedback on every action.** Adding, removing, clearing and attempting a duplicate each fire a toast notification, so nothing happens silently.

## Running locally

```bash
npm install
npm run dev
```

## React questions

**What is JSX, and why is it used in React?**

JSX lets you write HTML-looking markup directly inside JavaScript. It is not really HTML, it gets compiled into function calls that build elements. It is used because describing a UI as nested tags is far easier to read than writing out those function calls by hand, and it keeps the markup next to the logic that controls it.

**What is the difference between props and state?**

Props are data a component receives from its parent. The component cannot change them. State is data a component owns and can update, and changing it causes a re-render. In this project the stack array is state inside App, while each technology card receives its data as props.

**What does the useState hook do, and where did you use it in this project?**

It gives a function component a piece of memory that survives re-renders, plus a function to update it. I used three in App: `technologies` for the list loaded from JSON, `stack` for the technologies the user has selected, and `loading` for whether the fetch is still running.

**What does the useEffect hook do, and why did you need it to load the JSON data?**

It runs code after a render, usually for things outside React's normal flow like fetching data. I needed it because fetching is a side effect. Calling fetch directly in the component body would run it on every single render, and since the fetch sets state and setting state triggers another render, it would loop forever. Passing an empty dependency array makes it run once after the component first mounts.

**Why does every item in a .map() list need a unique key prop?**

React uses the key to match up items between renders. Without one it cannot tell whether an item moved, was added or was removed, so it falls back to guessing by position and can update the wrong element. I used each technology's `id`, which is unique and stable.

**What is conditional rendering? Show one place you used it.**

Rendering different output depending on a condition. The Your Stack panel uses it three times off the same check. When `stack.length === 0` the heading reads "No technologies selected yet" and a dashed empty box appears; otherwise the count shows and the list renders:

```jsx
{stack.length === 0 ? (
  <div className="...">Your stack is empty.</div>
) : (
  <ul>{stack.map((tech) => ( ... ))}</ul>
)}
```

**How do you pass data from a parent component to a child, and how does a child send something back?**

Data goes down as props. Going back up, the parent passes a function as a prop and the child calls it. App owns the stack, so it passes `handleAddToStack` down through TechnologySection into each card. When a card's button is clicked, it calls that function with its own technology object. The card never touches the stack itself, it just reports the click upward and lets App decide what to do.