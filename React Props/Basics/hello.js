class Hello extends React.Component {
    render() {
        console.log(this.props);// To view properties in console
        return (<div>
            <h2>Hello from {this.props.from} to {this.props.to}</h2>
            <img src={this.props.src} />
            <h2>Hello{"!".repeat(this.props.num)}</h2>
        </div>);
    }
}