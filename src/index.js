const phases = {
    fetching: 'Fetching',
    success: 'Success',
    error: 'Error'
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

    renderSuccess() {
        return React.cloneElement(this.props.children, {fetchedData: this.data});
    }

    renderFetching() {
        return (
            <div style={this.style}>
                {!!this.props.loader
                    ? <this.props.loader {...this.props.spinnerProps}/>
                    : <div>Loading...</div>
                }
            </div>
        );
    }

    renderError() {
        return (
            <div style={this.style}>
                <div>{this.props.errorText}</div>
            </div>
        );
    }

    render() {
        const { phase } = this.state;

        return this[`render${phase}`]();
    }
}

export default FetchLoader;