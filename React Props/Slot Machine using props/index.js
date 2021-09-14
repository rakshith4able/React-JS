//React Properties are called as props 
//They are the way of passing data from components to another components
//The props are immutable
//that means once we get props in a component from other component we cant assign some other value to props


//The props are sent to other props by using syntax similar to attributes in tags inside the Component call
//  For eg. If we want  to pass properties with name from and to to Hello component 
// We can write <Hello from="me" to="her">  
// the values are strings if they are passed within double quotes
// we can pass other type of values to components using properties like number, arrays, boolean
// If we want to pass value other than type string we should not use "" instead we should assign the value placed in {} to property name


// To collect the values in properties we make use of this.props.property name in component's render method in js file.
// we can also make use of properties to set attributes of elements in components . for eg. src in img element

class App extends React.Component {
    render() {
        return (
            <div>
                <Machine s1="x" s2="y" s3="z" />
                <Machine s1="x" s2="x" s3="x" />
                <Machine s1="x" s2="y" s3="x" />
            </div>);
    }
}

ReactDOM.render(<App />, document.getElementById("root"));