import React, {Component} from 'react';

import './IconSwitch.css'

interface IIconSwitchProps {
  icon: string,
  onSwitch: () => void,
}

export default class IconSwitch extends Component<IIconSwitchProps> {
  render(){
    const {icon, onSwitch} = this.props;
    
    return(
      <div className="IconSwitch">
        <span
          className="material-symbols-outlined"
          onClick={onSwitch}  
        >
          {icon}
        </span>
      </div>
    );
  }
}
