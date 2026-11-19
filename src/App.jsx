import React from 'react'
import { jobs, STATUSES } from './data';
import JobColumn from './components/JobColumn';


function App() {

  return (
    <div className='app' >
     <header className='topbar'>
      <strong>Job Tracker</strong>
      <button className='add-btn'>+Add Jobs</button>
     </header>

     <main className='wrap'>
    <h1>My Job Search</h1>
    <div className='board'>
    {STATUSES.map((status)=>(
      <JobColumn key={status}
      status={status}
      jobs={jobs.filter((job)=> job.status === status
      )}/>
    ))}
    </div>
     </main>
    </div>
  )
}

export default App
