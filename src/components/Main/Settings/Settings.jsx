import React from 'react';
import m from './Settings.module.css';

function Settings(props) {
    return (
        <div className={m.item}>
            {props.settings}
        </div>
    )
}

export default Settings;