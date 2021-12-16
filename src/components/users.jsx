import React, { useState } from "react";
import api from "../api"

const Users=()=>{
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(users.filter(user => user._id !== userId));
    };

    const renderPhrase = (number) => {
        if(number) {
            return <span className="badge bg-primary text-wrap" style={{width: "20rem", fontSize: "1rem"}} > {number} человек тусанет с тобой сегодня  </span>
        } 
        return  <span className="badge bg-danger  text-wrap" style={{width: "15rem", fontSize: "1rem"}}>  Никто с тобой не тусанет  </span>
    };

    return (
        
        <>
        {renderPhrase(users.length)}
        { users.length ? 
        <table className="table">
        <thead>
            <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            </tr>
        </thead>
        <tbody>
           {users.map(user => (
            <tr key={user._id}>
               <td>{user.name}</td>
               <td>{
                    user.qualities.map(q => ( 
                        <span className={`badge m-2 bg-${q.color}`} key={q._id}>
                            {q.name}
                        </span>
                    )) 
               }</td>
                <td>
                    <span>{user.profession.name}</span>
                </td>
               <td>{user.completedMeetings}</td>
               <td>{user.rate}</td>
               <td><button
                    onClick={()=>handleDelete(user._id)}
                    type="button" 
                    className="btn btn-danger">
                        delete</button></td>
            </tr>
           ))}
        
        </tbody>
        </table> 
       : null } 
        </>
    );
};


export default Users;