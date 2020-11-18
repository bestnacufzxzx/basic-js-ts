import React, { Component } from 'react';

export default class Progress extends Component {
    render(){
        let props = this.props;
        return (
            <div>
                <label>{this.props.data.name}</label>
                <div className="progress">
                <div className={"progress-bar progress-bar-striped progress-bar-animated "+ this.props.data.color} role="progressbar" style={{width: this.props.data.percent}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">{this.props.data.percent}</div>
                {/* <div className={"progress-bar progress-bar-striped bg-warning "} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{this:props.data.percent}}>75%</div> */}
                </div>
            </div>
        )
    }
}
