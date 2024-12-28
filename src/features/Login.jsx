import { Field,Form, Formik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGetLoginMutation } from '../services/leadsApi'

function Login() {
  var [LogFn]=useGetLoginMutation();
  var navigate=useNavigate()
  return (
    <div className='container border border-3 border-primary w-25 p-4 ' style={{height:"340px",marginTop:"180px",backgroundColor:"245,245,245"}}>
      <h1>Login page</h1><br />
        <Formik initialValues={{
            username:'',
            password:'',
        }} onSubmit={(values)=>{
          LogFn(values).then((res)=>{
            window.localStorage.setItem("token",res.data.token)
            if(res.data.msg==="loginsuccess"){
              navigate('/dashboard')
            }
            else{
              navigate('/signup')
            }
          })
        }}>
         {
          ()=>{
            return <Form>
            <b>Username: </b><Field name="username" type="text" /> <br /><br />
            <b>Password : </b><Field name="password" type="password" /><br />
            <button className='bg-success m-2 rounded text-light p-2 border border-0'>Submit</button>
        </Form>
          }
         }
        </Formik>
        <p>if you aren't register then </p><Link to='/signup'>Signup</Link>
    </div>
  )
}

export default Login
