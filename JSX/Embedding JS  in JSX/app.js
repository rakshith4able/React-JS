function mood() {
    const moods = ['happy', 'sad', 'depressed', 'excited'];
    return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
    render() {
        return <div>
            <h2>2*3 written in curly braces returns calculated value {2 * 3}</h2>
            <h2>We can use curly braces to embed JS in JSX </h2>
            <h2>Function mood in curly braces returns value : {mood()} </h2>
        </div>
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));