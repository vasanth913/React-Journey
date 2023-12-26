/* Creating element is the Core thing of React */
const heading = React.createElement("h1",
{id:"heading",xyz:"abc"}, // These are the attributes
"Hello World from React!") // These are the children that goes into the h1 element;

console.log("Heading", heading) //It will create an object

/* Creating a root and rendering something inside it, it's the job of react dom */
//const root = ReactDOM.createRoot(document.getElementById("root"));

/* Converting the object into html element */
//root.render(heading);

{/* <div id="parent">
    <div id="child">
        <h1>I am h1 Tag</h1>
        <h2>I am h2 Tag</h2>
    </div>
</div> 

* ReactElement(Object) => HTML(Browser Understands)

*/}

const parent = React.createElement("div",{id:"parent"}, 
                React.createElement("div",{id:"child"},
               [React.createElement("h1",{className:"h1"},"I am h1 Tag"),
               React.createElement("h2",{className:"h1"},"I am h2 Tag")]));

console.log('parent', parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
