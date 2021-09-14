class Machine extends React.Component {
    render() {
        console.log(this.props);// To view properties in console
        let msg;
        if (this.props.s1 == this.props.s2 && this.props.s2 == this.props.s3) {
            msg = "You Won!";
        }
        else {
            msg = "You Lose!";
        }
        return (<div>
            <h1>{this.props.s1} {this.props.s2} {this.props.s3}</h1>
            <h2>{msg}</h2>

        </div>
        );
    }
}