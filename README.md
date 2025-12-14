# React-projects

Learning React while making small react projects

# Introduction to React

## Who Created React?

React was created by **Meta (formerly Facebook)** to solve UI update problems such as “ghost notifications,” where the notification count didn’t update correctly even after a user viewed their messages.

React introduced a fast and predictable way to update the UI whenever data changes.

---

## Why Do We Need React?

React helps developers build modern, interactive web applications. Some key benefits include:

- **Performance:** React uses a virtual DOM to update UI efficiently.
- **Efficiency & Speed:** Components make reusing and updating UI faster and more structured.

---

## Why Do We Need Bundlers (Vite, Bun, Deno, etc.)?

Bundlers are tools that prepare your code so it can run smoothly in the browser.
Browsers only understand **HTML, CSS, and JavaScript**, but developers often write modern code using:

- TypeScript
- JSX
- New JavaScript features not yet supported by all browsers

Bundlers help by:

- **Converting** TypeScript, JSX, and modern JavaScript into browser-compatible code
- **Optimizing** the output for better performance
- **Bundling** everything into efficient files

Examples of popular bundlers: **Vite, Bun, Deno, Webpack, Parcel**.

- **Use Ref vs fowardRef**
useRef is used to persist mutable values or access DOM elements without causing re-renders, while forwardRef allows a parent component to pass refs to child components for direct DOM or imperative access.