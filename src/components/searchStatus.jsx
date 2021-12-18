import React from "react";

const SearchStatus = ({length}) => {

    if(length) {
        return <span className="badge bg-primary text-wrap" style={{width: "20rem", fontSize: "1rem"}} > {length} человек тусанет с тобой сегодня  </span>
    } 
    return  <span className="badge bg-danger  text-wrap" style={{width: "15rem", fontSize: "1rem"}}>  Никто с тобой не тусанет  </span>

};

export default SearchStatus;