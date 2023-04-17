import React from 'react';
import Classes from './Spinner.css'
function Spinner(props) {
    return (
        <div className={Classes.loader} style={{color:"white",margin:"auto"}}>
            loading
        </div>
    );
}

export default Spinner;