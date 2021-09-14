//We can set default props in components if the property value is not passed
//That can be done using static defaultProps object with keys and values
// static defaultProps = {
//     from: "Anonymous",
//     count: 2
// }
class App extends React.Component {
    render() {
        return (
            <div>
                <Hello from="Rakshiii" to="You" count={5} />
                <Hello from="" to="You" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));