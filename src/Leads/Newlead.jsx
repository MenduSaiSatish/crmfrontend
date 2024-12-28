import React from 'react'
import { Field, Form, Formik } from 'formik'
import { useGetDataMutation } from '../services/leadsApi'
import { useNavigate } from 'react-router-dom'

function Newlead() {
    var[dataFn]=useGetDataMutation()
    var navigate=useNavigate()
    function ab(){
        navigate("/dashboard")
    }
    ab()
  return (
    <div>
      <Formik initialValues={{
        name:String,
        experience:String,
        intrestedCourse:String,
        mode:String,
        academics:String,
        mobile:Number,
        email:String,
        address:String,
        referredBy:String,
        remarks:Array
      }} onSubmit={(values)=>{
        dataFn(values).then((res)=>{console.log(res)})
      }}>
        {
            ()=>{
                return <Form>
                    <div class="form-floating">
                        <Field class="form-control" name="name" placeholder="Leave a comment here" id="floatingTextarea"></Field>
                        <label for="floatingTextarea">Full Name</label>
                    </div><br />
                    <div class="form-floating">
                        <Field class="form-control" name="experience" placeholder="Leave a comment here" id="floatingTextarea"></Field>
                        <label for="floatingTextarea">Experience</label>
                    </div><br />
                    <div class="form-floating">
                        <Field class="form-control" name="intrestedCourse" placeholder="Leave a comment here" id="floatingTextarea"></Field>
                        <label for="floatingTextarea">IntrestedCourse</label>
                    </div><br />
                    <div class="form-floating">
                        <Field class="form-control" name="mode" placeholder="Leave a comment here" id="floatingTextarea"></Field>
                        <label for="floatingTextarea">Mode</label>
                    </div><br />
                    <div class="form-floating">
                        <Field class="form-control" name="academics" placeholder="Leave a comment here" id="floatingTextarea"></Field>
                        <label for="floatingTextarea">Academics</label>
                    </div><br />
                    <div class="form-floating">
                        <Field class="form-control" name="mobile" placeholder="Leave a comment here" id="floatingTextarea"></Field>
                        <label for="floatingTextarea">Mobile</label>
                    </div><br />
                    <div class="form-floating">
                        <Field class="form-control" name="email" placeholder="Leave a comment here" id="floatingTextarea"></Field>
                        <label for="floatingTextarea">Email</label>
                    </div><br />
                    <div class="form-floating">
                        <Field class="form-control" name="address" placeholder="Leave a comment here" id="floatingTextarea"></Field>
                        <label for="floatingTextarea">Address</label>
                    </div><br />
                    <div class="form-floating">
                        <Field class="form-control" name="referredBy" placeholder="Leave a comment here" id="floatingTextarea"></Field>
                        <label for="floatingTextarea">ReferredBy</label>
                    </div><br />
                    <div class="form-floating">
                        <Field class="form-control" name="remarks" placeholder="Leave a comment here" id="floatingTextarea"></Field>
                        <label for="floatingTextarea">Remarks</label>
                    </div><br />
                    <button className='btn btn-success'>submit</button>
                </Form>
            }
        }

      </Formik>
    </div>
  )
}

export default Newlead
