import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { regSchema } from './../Schema/RegisterSchema';
import { useNavigate } from 'react-router-dom';
import style from './Register.module.css'

export default function Register() {

  // Errores from backend
  // let [errors,setErrors]=useState([]);
  let [errorsTwo,setErrorsTwo]=useState("");
  let navigate = useNavigate();

  // use Formik 
  let formik = useFormik({
    initialValues :{
      userName : "",
      email: "",
      password : "",
      cPassword : ""
    },validationSchema :regSchema
    ,onSubmit:sendData
  })


  async function sendData(values){
    let {data} = await axios.post("https://king-prawn-app-3mgea.ondigitalocean.app/auth/signup",values)
    .catch((err)=>{
      // setErrors(err.response.data.validationErr);
      console.log(err.response.data.message);

      setErrorsTwo(err.response.data);

    })
    if(data.message =='Done'){
      console.log("welcome");
      setErrorsTwo("");
      navigate('/login')

    }
  
  }

  return (
    <div className='container mt-5 pt-5'>
    <form className='w-50 m-auto my-5 text-left d-flex flex-wrap  position-relative' onSubmit={formik.handleSubmit}>
    
    <div>
    <h1>Join Kohl's Rewards</h1>
    <p>Join the Kohl's Rewards loyalty program and start shopping, earn Kohl's Rewards with every purchase and track your purchases, both in store and online.</p>

    {/* {errors ?  errors.map((err=>{
      return <div className='alert alert-danger'>{err.message}</div>
    })): ""} */}

    {/* {errorsTwo ?     <div className='alert alert-danger'>{errorsTwo.message}</div> : ""} */}

    {errorsTwo.validationErr?     errorsTwo.validationErr.map((err=>{
      return <div className={`${style.notFlex} alert alert-danger`}>{err.message}</div>
    })) : 
    errorsTwo ?     <div className='alert alert-danger'>{errorsTwo.message}</div> : ""
    
    }
    </div>


{/* Email Address */}
  <div className="form-group  p-2 w-50 ">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" 
    className={`form-control ${formik.errors.email && formik.touched.email ?"is-invalid":""}`}
    name='email'
    value={formik.values.email}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
/>
{formik.errors.email && formik.touched.email ? <p className={` alert alert-danger`}>{formik.errors.email}</p>: ""}

  </div>

{/* mobile  */}
<div className="form-group  p-2  w-50">
    <label htmlFor="exampleInputMobile">Mobile</label>
    <input type="number"  id="exampleInputMobile" placeholder="(   )-"
    className={`form-control `}
    name='mobile' 
    // value={formik.values.userName}
    // onChange={formik.handleChange}
    // onBlur={formik.handleBlur}
/>
  </div>
  {/* {formik.errors.userName && formik.touched.userName ? <div className='alert alert-danger '>{formik.errors.userName}</div>:""} */}


{/* Name  */}
  <div className="form-group  p-2 w-50">
    <label htmlFor="exampleInputName">Name</label>
    <input type="text"  id="exampleInputName"
    className={`form-control ${formik.errors.userName && formik.touched.userName ?"is-invalid":""}`}
    name='userName' 
    value={formik.values.userName}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
/>
{formik.errors.userName && formik.touched.userName ? <div className='alert alert-danger '>{formik.errors.userName}</div>:""}

  </div>

{/* nickname  */}
<div className="form-group  p-2 w-50">
    <label htmlFor="nickname">nickname</label>
    <input type="text"  id="nickname"
    className={`form-control `}
    name='nickname' 
    // value={formik.values.userName}
    // onChange={formik.handleChange}
    // onBlur={formik.handleBlur}
/>
  </div>
  {/* {formik.errors.userName && formik.touched.userName ? <div className='alert alert-danger '>{formik.errors.userName}</div>:""} */}
 
 {/* birthday */}
<div className={`${style.notFlex} form-group p-2 w-50`}>
    <label htmlFor="Birthday">Birthday</label>
    <input type="date" id="Birthday"
    className={`form-control `}
    name='Birthday' 
    // value={formik.values.password}
//     onChange={formik.handleChange}
    // onBlur={formik.handleBlur}
/>
<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
  
{/* password */}
  <div className="form-group p-2 w-50">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" id="exampleInputPassword1"
    className={`form-control ${formik.errors.password && formik.touched.password ?"is-invalid":""}`}
    name='password' 
    value={formik.values.password}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
/>
{formik.errors.password && formik.touched.password ? <div className='alert alert-danger '>{formik.errors.password}</div>:""}

  </div>

{/* confirm Password */}
  <div className="form-group p-2 w-50">
    <label htmlFor="exampleInputPassword2">Confirm your Password</label>
    <input type="password" id="exampleInputPassword2"
    className={`form-control ${formik.errors.cPassword && formik.touched.cPassword ?"is-invalid":""}`}
    name='cPassword'
    value={formik.values.cPassword}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
/>
{formik.errors.cPassword && formik.touched.cPassword ? <div className='alert alert-danger'>{formik.errors.cPassword}</div>:""}

  </div>

<p className='p-2 mt-3'>By selecting "Create Account" you are agreeing to create a Kohl's account and to enroll in Kohl's Rewards and acknowledge having read and agree to Kohl's Privacy Policy, Legal Notices, Notice of Financial Incentive, and Rewards Terms and certify that you are at least 16 years old and a US resident.</p>


  <button type="submit" className="btn btn-primary my-3 px-4 py-3 rounded-pill" id={`${style.creatAccBtn}`}>CREATE ACCOUNT </button>
</form>

    </div>
  )
}
