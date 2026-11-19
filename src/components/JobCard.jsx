import React from "react";

function JobCard({role, company, note}){

    return(

        <article className="card">
            <p className="role">{role}</p>
            <p className="company">{company}</p>
            <p className="note">{note}</p>
        </article>
    )
}


export default JobCard;