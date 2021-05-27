import { useEffect, useState } from "react";


const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect (() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = (event) => {
        setEditMode(false);
        props.updateStatus(event.target.value);
    };

    const onStatusChange = (event) => {
        setStatus(event.target.value)
    };

    const onHandleFocus = (event) => {
        event.target.select();
    }



    if(!props.isOwner) {
        return <span>{props.status ? props.status : '----'}</span>;
    };
    return (
        <div>
            {editMode
            ? <input 
                onBlur = {deactivateEditMode}
                autoFocus = {true}
                onFocus = {onHandleFocus}
                value = {status}
                onChange = {onStatusChange}
                ></input>
            : <span onDoubleClick = {activateEditMode}>{props.status ? props.status : '----'}</span>     
            }
        </div>
    );
}

export default ProfileStatus;