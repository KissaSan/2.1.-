import React from "react";

const Qualitie = ({color, name, _id}) => (

<span className={`badge m-2 bg-${color}`} key={_id}>
    {name}
</span>
);

export default Qualitie;