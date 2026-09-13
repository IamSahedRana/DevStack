# 🧱 Dev Stack Builder

A modern, responsive web application allowing developers to browse, compare, and build their ideal technology stack for future projects. 

## 🛠️ Technology Used
* **Frontend Library:** React.js (Vite)
* **Styling:** Tailwind CSS + DaisyUI
* **Language:** TypeScript
* **State Management:** Context API
* **Alerts:** React-Toastify

## ✨ Key Features
1. **Dynamic JSON Fetching:** Technologies load smoothly from an external JSON file complete with a loading state/spinner for optimal UX.
2. **Intelligent Stack Management:** Users can add tools to their personalized "Your Stack" sidebar. The system prevents duplicates, instantly disables buttons upon adding, and offers individual or bulk removal capabilities.
3. **Global Theme Integration:** Implements a unified, dynamic gradient theme (`bg-brand-gradient`) allowing for instant application-wide re-theming by altering a single CSS variable.

---

## 📚 React Q&A

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension for JavaScript that looks like HTML. It is used in React because it makes it much easier to write and structure the UI visually directly inside our JavaScript code without having to use complex `React.createElement()` functions.

**2. What is the difference between props and state?**
Props are read-only data passed down from a parent component to a child component to configure it. State is internal memory managed *within* a component that can change over time based on user actions, causing the component to re-render.

**3. What does the useState hook do, and where did you use it in this project?**
The `useState` hook allows a functional component to store and update data across renders. I used it in `TechGrid.tsx` to store the array of technologies fetched from the JSON file and to manage the `loading` boolean state.

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**
The `useEffect` hook lets you perform side effects (like fetching data, setting timers, or subscribing to events) outside the regular component render cycle. I needed it to fetch the `technologies.json` file exactly once when the `TechGrid` component first mounted onto the screen.

**5. Why does every item in a .map() list need a unique key prop?**
React needs a unique `key` prop so it can keep track of which specific items in a list have changed, been added, or been removed. This makes UI updates highly efficient rather than re-rendering the entire list.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering is showing different UI elements based on a condition (like an `if-else` statement). I used it in `StackSidebar.tsx` to show an "Empty Stack" message if `stack.length === 0`, and the actual list of technologies if the stack had items.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
You pass data from parent to child using `props` (like `<TechCard tech={data} />`). A child sends data back to the parent by calling a function passed down via props (or Context), such as the child calling `addToStack(tech)` which updates the parent/global state.