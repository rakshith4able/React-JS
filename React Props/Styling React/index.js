// In React the CSS styles can be applied in 3 ways
//1) Using External Script 2)Using Inline styles 3) To set styles based on condition using inline and external

//1)To set styles refering the external css file linked to HTML
// -We use convention of using same class name in CSS as of the component 
// - Instead of using class attribute in element we use JSX version of it called className 

//2)TO set styles inline we use style attribute and pass object consisting of property-value pairs
// -property cannot include hyphen instead we use camelcasing 
//-for eg background-color is specified as {backgroundColor:red}

//3)To set styles conditionally
class App extends React.Component {
    render() {
        return (
            <div >
                <Hello from="Rakshiii" to="You" count={5} />
                <Hello from="" to="You" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));