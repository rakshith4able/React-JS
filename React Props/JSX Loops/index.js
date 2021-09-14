//To make loops in JSX we commonly use array.map(fn) function of array in components

class App extends React.Component {
    render() {
        return (
            <div>
                <Friend name="Ronaldo" hobbies={['Making new Crushes', 'Being Happy']} />

            </div>);
    }
}

ReactDOM.render(<App />, document.getElementById("root"));