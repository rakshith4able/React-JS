class Friend extends React.Component {
    render() {
        console.log(this.props);// To view properties in console
        const { name, hobbies } = this.props;

        return (<div>
            <h1>{name}</h1>
            <ul>{hobbies.map((h) => { return <li>{h}    </li> })}</ul>

        </div>
        );
    }
}