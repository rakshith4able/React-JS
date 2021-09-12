/*
- Components are the main building blocks of react
- React helps us to make components, communicate bw the components and pass data,information and methods bw one another
- Components let us split the UI into independent,reusable pieces

THERE ARE TWO MAIN WAYS OF WRITING COMPONENTS IN REACT
1) USING CLASS 2)USING FUNCTIONS

*/

// Now we will be creating function component

//we create a JS function 
//The function component doesn't contain the rendor() method like class component
// The return statement is used in function to return JSX
//We wont use quotes in return statement
function MultipleHellos() {
    return <div>
        <h1>Hello</h1>
        <h1>Hello</h1>
    </div>
}
//We have included a div with id #root we want MultipleHellos component to render there 
ReactDOM.render(<MultipleHellos />, document.getElementById('root'));
//First param is < /> containing component name in middle
//Second paramenter is the target where we want to use the component

