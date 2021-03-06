import React, {useEffect, useState} from 'react';
import classes from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () =>{
        setStatus(props.status);
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <>
            {!editMode &&
            <div>
                <strong>Статус:</strong> <span onDoubleClick={activateEditMode}>{props.status || "---"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true}
                       value={status}
                       onBlur={deactivateEditMode}
                       onChange={onStatusChange}
                />
            </div>
            }
        </>
    )
}


export default ProfileStatusWithHooks;
