import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = ({user, handleDelete, handleToggleBookmark}) => {
    
    return (
        <>
            <tr key={user._id}>
               <td>{user.name}</td>
               <td>{
                    user.qualities.map(q => <Qualitie key={q._id} {...q} />) 
               }</td>
                <td>
                    <span>{user.profession.name}</span>
                </td>
               <td>{user.completedMeetings}</td>
               <td>{user.rate}</td>
               <td><BookMark status={user.bookmark} onClick={()=>handleToggleBookmark(user._id)} /></td>
               <td><button
                    onClick={()=>handleDelete(user._id)}
                    type="button" 
                    className="btn btn-danger">
                        delete</button></td>
            </tr>
        </>
        
    )
};

export default User;