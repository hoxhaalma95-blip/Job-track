import React from "react";
import JobCard from "./JobCard";


function JobColumn({status, jobs}){
    return(
        <section className="column">
<h2>
    {status}<span className="count">{jobs.length}</span>
</h2>

{jobs.map((job)=>(
<JobCard key={job.id} {...job}/>
))}

        </section>
    );
}

export default JobColumn;