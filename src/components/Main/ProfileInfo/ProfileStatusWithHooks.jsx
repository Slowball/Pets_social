import React, {useEffect, useState} from 'react';


const ProfileStatusWithHooks = (props) => {

   const[editMode, setEditMode] = useState(false);
   const [status, setStatus] = useState(props.status);
   const deactivateEdit = () => {
       setEditMode(false)
       props.updateStatus(status);
   };

   useEffect(() => {
       setStatus(props.status)
   }, [props.status]);

    return (<div>
            {!editMode &&
            <div>
                <span onClick={() => setEditMode(true)} >{props.status || '------'}</span>
            </div>}
            {editMode &&
            <div>
                <input onChange={(e) => setStatus(e.currentTarget.value)} autoFocus={true} onBlur={deactivateEdit} value={status}/>
            </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;