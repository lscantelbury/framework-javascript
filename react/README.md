# How does React work?

React reconstructs the DOM (Rendered HTML on the browser) in
JavaScript and pushes only the changes that occurred to the DOM.

It uses the JSX for creating elements in a closer syntax to HTML, but
powers it up with JavaScript.

When you create an element in JSX:
 `<button> My button </button>`

React is executing `React.createElement("button", {}, "My button")`
in the background. This syntax allows you to create and interact with the
DOM in JavaScript.

This DOM manipulated by the user is called VirtualDOM. In it, ReactDOM parses
its types to actual HTML. When a change of content of the element is made, React diffs its changes compared to the actual DOM, and then updates it with the recent changes. This makes dynamic changes to the DOM.

## React Components:

In React, JSX code can be reused in many places in the codebase. For creating
an element, you split it in a different file and encapsulate its states and methods.
The changes occurred to this component, triggers an update in the VirtualDOM, which apply the changes into the real DOM.
