import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useGetRemarksByIdMutation } from '../services/leadsApi'
import { useNavigate, useParams } from 'react-router-dom'

function AddRemarks() {
  var{id}=useParams()
  var[RemarksFn]=useGetRemarksByIdMutation()
  // var navigate=useNavigate()
  // function ab(){
  //   navigate("/dashboard/leaddetails")
  // }
  // ab()
  return (
    <div>
      <Formik initialValues={{
        response:'',
        name:''
      }} onSubmit={(values)=>{
        console.log(values)
        RemarksFn({remarks:values,id}).then((res)=>{
          console.log(res)
        })
      }}>
        {
          ()=>{
            return <Form>
              <Field type="text" name="response" placeholder="response"></Field><br />
              <Field type="text" name="name" placeholder="name"></Field><br />
              <button type="submit"className='btn btn-success'>Add Remarks</button>
            </Form>
          }
        }

      </Formik>
    </div>
  )
}

export default AddRemarks
