import React from 'react'
import { useGetLeadsByIdQuery } from '../services/leadsApi'
import { Link, useParams } from 'react-router-dom'

function LeadDetails() {
    var {id} = useParams();
    console.log({id})
    var{isLoading,data}=useGetLeadsByIdQuery(id)
    console.log(data)
    console.log(isLoading)
  return (
    <div>
        <h1>Details</h1>
        <Link to={`/dashboard/addremarks/${id}`}><button className='btn btn-outline-success'> +Add Remarks</button></Link>
      {
        !isLoading && (<div className='d-flex justify-content-evenly'>
                <div >
                  <p class="p-3 mb-2 bg-primary-subtle text-primary-emphasis "style={{borderRadius:"10px"}}>
                  {
                    data.name
                  }
                  </p>
                </div>
                <div>
                {
                  data.remarks.map((remarks)=>{
                   return <li className='list-unstyled'>
                         {
                        typeof(remarks)==="string" && <p class="p-3 mb-2 bg-info-subtle text-info-emphasis"style={{borderRadius:"10px"}}>{remarks}</p>
                        }
                        {
                            typeof(remarks)==='object'&& <div class="p-3 mb-2 bg-info-subtle text-info-emphasis "style={{borderRadius:"10px"}}>
                                {remarks.name}
                                <p >
                                    {new Date(remarks.timestamp).toDateString()}
                                    {new Date(remarks.timestamp).toLocaleTimeString()}
                                </p>
                            </div>
                        }
                   </li>
                  })  
                }
                </div>
        </div>
        )
      }
    </div>
  )
}

export default LeadDetails
