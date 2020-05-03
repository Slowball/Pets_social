import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    };
    activeEditMode() {
        this.setState({
            editMode: true
        })
    };
    deactiveEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    };
    statusOnChange = (e) => {
        this.setState({
            status:e.currentTarget.value
        })
    };
    componentDidUpdate= (prevProps, prevState, snapshot) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (<div>
                {!this.state.editMode &&
                <div>
                    <span onClick={this.activeEditMode.bind(this)}>{this.props.status || '------'}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onChange={this.statusOnChange} onBlur={this.deactiveEditMode.bind(this)} value={this.state.status}/>
                </div>}
            </div>
        )
    }
}

export default ProfileStatus;