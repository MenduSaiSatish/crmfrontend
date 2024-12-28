import React from 'react'
import { useGetDeleteMutation, useGetLeadsQuery } from '../services/leadsApi';
import { Link } from 'react-router-dom';


function LeadData() {
  var[search,SetSearch]=React.useState('')
    var [deleteFn]=useGetDeleteMutation()
    // var []=useGetLeadsQuery()
    var{isLoading,data}=useGetLeadsQuery();
        console.log(isLoading)
        console.log(data)
        function delteLead(id){
          deleteFn(id).then(()=>{console.log(id)})
        }
        function LeadFilters(j){
          return j.name.toLowerCase().includes(search.toLowerCase())
        }
        var LeadedFilters=data?.filter(LeadFilters);
  return (
    <div className=' rounded'>   
      <input class="form-control me-4 w-50  " type="search" placeholder="Search" aria-label="Search" style={{margin:'5px',marginLeft:"350px",display:"inline-block"}} value={search} onChange={(e)=>{SetSearch(e.target.value)}} />
      <button class="btn btn-outline-success" type="submit" style={{margin:'5px'}}>Search</button>   
      <table class="table table-dark table-hover " style={{marginTop:"15px"}}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Intrested Course</th>
                                    <th>Mobile</th>
                                    <th>Academics</th>
                                    <th>Experience</th>
                                    <th>Mode</th>
                                    <th>Delete</th>
                                    <th>More</th>
                                </tr>
                            </thead>
                            <tbody>
                              {
                                isLoading && <h3>Loading....</h3>
                              }
                        {
                           !isLoading && LeadedFilters?.map((d)=>{
                                return <tr>
                                            <td>{d.name}</td>
                                            <td>{d.intrestedCourse}</td>
                                            <td>{d.mobile}</td>
                                            <td>{d.academics}</td>
                                            <td>{d.experience}</td>
                                            <td>{d.mode}</td>
                                            <td><button className='btn btn-danger' onClick={()=>{delteLead(d._id)}}>Delete</button></td>
                                            <td><Link to={`/dashboard/leaddetails/${d._id}`}><button className='btn btn-primary'>More</button></Link></td>
                                            {/* <td><Link to='/dashboard/edit'><button className='btn btn-primary' onClick={()=>{updateLead(d._id)}}>Edit</button></Link></td> */}
                                        </tr>
                                    })
                        }
                 </tbody>
         </table>
    </div>
  )
}

export default LeadData
