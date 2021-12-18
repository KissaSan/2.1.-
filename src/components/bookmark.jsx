import React from "react";



const BookMark = ({status,onClick}) => (

<button onClick={onClick}>
    <i className={`bi ${status ? "bi-bookmark-fill" : "bi-bookmark" }`}></i>
</button>
    

);


export default BookMark;