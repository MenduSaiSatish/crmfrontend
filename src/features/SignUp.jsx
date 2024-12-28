import { Field,Form, Formik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGetSignupMutation } from '../services/leadsApi'

function SignUp() {
  var[SignFn]=useGetSignupMutation();
  var navigate=useNavigate()
   function ab(){
    navigate("/login")
   }
   ab()
  return (
    <div className='container border border-3 border-info w-25 p-4 ' style={{height:"340px",marginTop:"180px",backgroundColor:"245,245,245"}}>
      <h1>Signup page</h1><br />
        <Formik initialValues={{
            username:'',
            password:'',
        }} onSubmit={(values)=>{
          SignFn(values).then((res)=>{
            console.log(res)
          })
        }} >
         {
          ()=>{
            return <Form>
            <b>Username: </b><Field name="username" type="text" /><br /><br />
            <b>Password : </b><Field name="password" type="password" /><br /><br />
            <button className='bg-primary text-light rounded p-2 border border-0'>Submit</button>
        </Form>
          }
         }
            
        </Formik><br />
        <Link to='/login'>Login</Link>
    </div>
  )
}

export default SignUp