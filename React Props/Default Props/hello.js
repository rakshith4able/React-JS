class Hello extends React.Component {
    static defaultProps = {
        from: "Anonymous",
        count: 2
    }
    render() {
        return <h1>Hello from {this.props.from} to {this.props.to} {"!".repeat(this.props.count)}</h1>;
    }
}