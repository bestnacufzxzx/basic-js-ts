import React, { Component } from 'react';

export default class TextInput extends Component {
    render(){
        let props = this.props;
        return(
          <li>
            <input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
         </li>
        )
    }
}