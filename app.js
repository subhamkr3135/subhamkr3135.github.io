// const head= React.createElement('h1',{id :"heading"},'Hello World from react');//element,object,children
//         const root2= ReactDOM.createRoot(document.getElementById('root'));
//         root2.render(head);
// const heading=document.createElement('h2');
//         heading.textContent='Hello World from js';
//         const root=document.getElementById('root2');
//         root.appendChild(heading);
// const head2=React.createElement('h3',{id:"heading2"},"Hello World from react child");
// const child=React.createElement('div',{id:"child"},head2);
// const parent=React.createElement('div',{id:"parent"},child);


// const root3=ReactDOM.createRoot(document.getElementById('root3'));
// // root3.render(parent);
// // root3.render(child);
// root3.render(parent);
// Create and render the first React element
const head = React.createElement('h1', { id: "heading" }, 'Hello World from react');
const root2 = ReactDOM.createRoot(document.getElementById('root'));
root2.render(head);

// Create and append the second DOM element
const heading = document.createElement('h2');
heading.textContent = 'Hello World from js';
const root = document.getElementById('root2');
root.appendChild(heading);

// Create nested React elements

const child1=[React.createElement('h3',{id:"heading2"},"Hello World from react child1"),React.createElement('h3',{id:"heading3"},"Hello World from react child2")];
const head2 = React.createElement('h3', { id: 'heading2' }, 'hello World from react child');
const child = React.createElement('div', { id: 'child' }, head2,child1);
const parent = React.createElement('div', { id: 'parent' }, child);

// Render the nested React elements
const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(child);
