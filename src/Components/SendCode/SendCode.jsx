import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { codeSchema } from './../Schema/codeSchema';
import style from './SendCode.module.css'

export default function SendCode({saveCurentYser}) {

   


  // Errores from backend
  // let [errors,setErrors]=useState([]);
  let [errorsTwo,setErrorsTwo]=useState("");
  let navigate = useNavigate();

  // use Formik 
  let formik = useFormik({
    initialValues :{
      email: ""
    },validationSchema : codeSchema
    ,onSubmit:sendData
  })


  async function sendData(values){
    let {data} = await axios.patch("https://king-prawn-app-3mgea.ondigitalocean.app/auth/sendCode",values)
    .catch((err)=>{
      // setErrors(err.response.data.validationErr);
      // console.log(err.response.data.message);
      console.log(err.response.data);
      setErrorsTwo(err.response.data);
      

    })
    if(data.message =='Done'){
      setErrorsTwo("");
    //   localStorage.setItem("userToken",data.access_token);
    //   saveCurentYser();
      navigate('/checkEmail');

    }

    console.log(data);

  }

  return (
   <>
    {/* <div className={`${style.form} container mt-2 pt-2 `}>
    <div className={`${style.box1} container`}>
    <form className='m-auto my-5 ' onSubmit={formik.handleSubmit}>    
    <h2>Send Code</h2>
    <p>Sign in to your Kohls.com account to shop,check out or track your order.</p>
    {errorsTwo ?     <div className='alert alert-danger'>{errorsTwo.message}</div> : ""}
  <div className={` form-group  p-2`}>
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" 
    className={`form-control ${formik.errors.email && formik.touched.email ?"is-invalid":""}`}
    name='email'
    value={formik.values.email}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}/>
    {formik.errors.email && formik.touched.email ? <p className='alert alert-danger'>{formik.errors.email}</p>: ""}
  </div>

 

  <button type="submit" className="btn btn-primary my-3">Send Code</button>
    </form>
    </div>

    </div> */}
    <div className="modal pt-5 d-block " tabIndex={-1} id={`${style.modal}`}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Request a Password Reset</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
        </div>

        <div className="modal-body">
          <p>Enter the email address associated with your Kohls.com online store account</p>
          <div className={`${style}`}>
        <div className={`${style.box1} `}>
        <form className=' ' onSubmit={formik.handleSubmit}>    
        {/* <h2>Send Code</h2>
        <p>Sign in to your Kohls.com account to shop,check out or track your order.</p> */}
        {errorsTwo ?     <div className='alert alert-danger'>{errorsTwo.message}</div> : ""}
        <div className={` form-group  p-2`}>
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" 
        className={`form-control ${formik.errors.email && formik.touched.email ?"is-invalid":""}`}
        name='email'
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}/>
        {formik.errors.email && formik.touched.email ? <p className='alert alert-danger'>{formik.errors.email}</p>: ""}
        </div>
        <button type="submit" className="btn btn-primary my-3">Send Code</button>
        </form>
         </div>
        </div>
        </div>
        <div className="modal-footer">
          {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
          {/* <button type="submit" className="btn btn-primary my-3">Send Code</button> */}

          {/* <button type="button" className="btn btn-primary">Save changes</button> */}
        </div>
      </div>
    </div>
  </div>
   </>


  )
}
