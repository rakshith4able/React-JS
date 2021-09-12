/*
- Components are the main building blocks of react
- React helps us to make components, communicate bw the components and pass data,information and methods bw one another
- Components let us split the UI into independent,reusable pieces

THERE ARE TWO MAIN WAYS OF WRITING COMPONENTS IN REACT
1) USING CLASS 2)USING FUNCTIONS

*/

// Now we will be reating class component

//we create a class with some name and extend it to React.Component
//The class components always has a method called rendor 
// rendor method returns something in JSX (HTML tags kind of syntax)
//We wont use quotes in return statement
class Hello extends React.Component {
    render() {
        return <h1>Hellooo!</h1>
    }
}

//We have included a div with id #root we want Hello component to render there 
ReactDOM.render(<Hello />, document.getElementById('root'));
//First param is < /> containing component name in middle
//Second paramenter is the target where we want to use the component


// we can return only one thing in rendor() so if we want to return multiple h1 then we enclose them in div and return

class MultipleHello extends React.Component {
    render() {
        return <div>
            <h1> Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
        </div>;
    }
}

ReactDOM.render(<MultipleHello />, document.getElementById('root'));