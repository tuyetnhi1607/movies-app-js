import React, {useState, useEffect} from 'react';
import './modal.scss';

function Modal(props) {
    const [active, setActive] = useState(false);

    useEffect(()=>{
        setActive(props.active);
    },[props.active])

    return (
        <div className={`modal ${active ? 'active' : ''}`}>
            hello
        </div>
    )
}

export default Modal
