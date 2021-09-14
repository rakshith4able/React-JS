class Hello extends React.Component {
    static defaultProps = {
        from: "Anonymous",
        count: 2
    }
    render() {
        const styles = { color: 'red', backgroundColor: 'green' };

        return <div>
            <h1 className="Hello">Hello from {this.props.from} to {this.props.to} {"!".repeat(this.props.count)}</h1>
            <h2 style={{ color: 'red', backgroundColor: 'yellow' }}>This is inline styled</h2>
            <h2 style={styles}>This is inline styled by passing object stored in a variable</h2>
            <h3 className={this.props.from == 'Rakshiii' ? 'rakshiii' : "anonymous"}>To style this when from is Anonymous / Rakshiii</h3>
        </div>;

    }
}