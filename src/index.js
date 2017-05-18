const phases = {
    fetching: 1,
    success: 2,
    error: 4
}

class FetchLoader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            phase: phases.fetching
        }

        this.style = {
            height: props.height || '100%',
            width: '100%'
        }
    }

    componentDidMount() {
        this.props.fetch()
            .then((res) => res.json())
            .then((data) => {
                this.data = data;
                this.setState({ phase: phases.success });
            })
            .catch(() => this.setState({ phase: phases.error }))
    }

    render() {
        const { phase } = this.state;

        if (phase === phases.success) {
            return React.cloneElement(this.props.children, {fetchedData: this.data});
        } else {
            return (
                <div style={this.style}>
                    {phase === phases.fetching && (
                        !!this.props.loader
                        ? <this.props.loader {...this.props.spinnerProps}/>
                        : <div>Loading...</div>
                    )}
                    {phase === phases.error && <div>{this.props.errorText}</div>}
                </div>
            )
        }
    }
}

export default FetchLoader;