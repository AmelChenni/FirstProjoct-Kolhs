import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { logSchema } from './../Schema/LoginSchema';
import style from './Login.module.css'

export default function Login({saveCurentYser}) {

  // Errores from backend
  // let [errors,setErrors]=useState([]);
  let [errorsTwo,setErrorsTwo]=useState("");
  let navigate = useNavigate();

  // use Formik 
  let formik = useFormik({
    initialValues :{
      email: "",
      password : ""
    },validationSchema :logSchema
    ,onSubmit:sendData
  })


  async function sendData(values){
    let {data} = await axios.post("https://king-prawn-app-3mgea.ondigitalocean.app/auth/login",values)
    .catch((err)=>{
      // setErrors(err.response.data.validationErr);
      // console.log(err.response.data.message);
      console.log(err.response.data);
      setErrorsTwo(err.response.data);
      

    })
    if(data.message =='Done'){
      setErrorsTwo("");
      localStorage.setItem("userToken",data.access_token);
      saveCurentYser();
      navigate('/cart');
      console.log(data);

    }

  
  }

  return (
    <div className={`${style.form} container mt-2 pt-2 `}>
    <div className={`${style.box1} container`}>
    <form className='m-auto my-5 ' onSubmit={formik.handleSubmit}>    
    <h2>Sign In</h2>
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

  <div className="form-group p-2">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" id="exampleInputPassword1" placeholder="Password"
    className={`form-control ${formik.errors.password && formik.touched.password ?"is-invalid":""}`}
    name='password' 
    value={formik.values.password}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}/>
  </div>
  {formik.errors.password && formik.touched.password ? <div className='alert alert-danger '>{formik.errors.password}</div>:""}

  <div className={`${style.formCheck} p-2 relative`}>
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Keep me signned in</label>
    <Link href="/"  to='/SendCode'>Forget password?</Link>
    <p className="form-check-label" htmlFor="exampleCheck1">Check this box to stay signed in on this device. Recommended for devices that only you use.</p>
  </div>

  <button type="submit" className="btn btn-primary my-3">SIGN IN</button>
    </form>
    </div>

    <div className={`${style.box2} container pt-5`}>
    <h2>Create Account</h2>
      <p>With a Kohls.com account, enjoy exclusive, benefits that make shopping faster and easier!</p>
      <div className='items'>
        <div className='mb-4'>
          <img src='https://cdn1.iconfinder.com/data/icons/lined-shopping-cart/48/a-10-512.png' alt='Enjoy Express Checkout'/>
          <span>Enjoy Express Checkout</span>
        </div>
        
        <div className='mb-4'>
          <img src='https://media.kohlsimg.com/is/image/kohls/111223-20220501-tbd-flag?fmt=png-alpha' alt='See your Kohls Rewards'/>
          <span>See your Kohl's Rewards</span>
        </div>

        <div className='mb-4'>
          <img src='https://frequentmiler.com/wp-content/uploads/2013/09/kohls-cash.png' alt='Print Kohls Cash'/>
          <span>Print Kohl's Cash</span>
        </div>

        <div className='mb-4'>
          <img src='https://static.thenounproject.com/png/3154344-200.png' alt='Track orders easily'/>
          <span>Track orders easily</span>
        </div>
      </div>
      <Link type="submit" className={`${style.button} btn btn-primary my-3`} to='/register'>CREATE ACCOUNT</Link>

    </div>
    </div>
  )
}
