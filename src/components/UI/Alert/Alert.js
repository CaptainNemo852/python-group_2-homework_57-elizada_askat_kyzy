import React from 'react';
import './Alert.css';

function Alert(props) {
    return <div>
        <div className={['Alert alert', props.type, (props.show ? 'show' : 'fade')].join(' ')}>
            {props.children}
            <button type="button" className="close" > close </button>
        </div>

    </div>

}

export default Alert;