// import axios from 'axios'
// import { useFormik } from 'formik'
// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import { codeSchema } from './../Schema/codeSchema';
import { Link } from 'react-router-dom'
import style from './CheckEmail.module.css'

export default function CheckEmail() {

   


  // Errores from backend
  // let [errors,setErrors]=useState([]);
//   let [errorsTwo,setErrorsTwo]=useState("");
//   let navigate = useNavigate();

  // use Formik 
//   let formik = useFormik({
//     initialValues :{
//       email: ""
//     },validationSchema : codeSchema
//     ,onSubmit:sendData
//   })


//   async function sendData(values){
//     let {data} = await axios.patch("https://king-prawn-app-3mgea.ondigitalocean.app/auth/sendCode",values)
//     .catch((err)=>{
//       // setErrors(err.response.data.validationErr);
//       // console.log(err.response.data.message);
//       console.log(err.response.data);
//       setErrorsTwo(err.response.data);
      

//     })
//     if(data.message =='Done'){
//       setErrorsTwo("");
//     //   localStorage.setItem("userToken",data.access_token);
//     //   saveCurentYser();
//       navigate('/checkEmail');

//     }

//     console.log(data);

//   }

  return (
   <>
       <div className="modal pt-5 d-block px-5" tabIndex={-1} id={`${style.modal}`}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header bg-secondary text-white">
          <h5 className="modal-title ">CHECK YOUR EMAIL</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
        </div>

        <div className="modal-body">
          <p>We are sending a password reset link to your email.</p>
          <p>If you don't receive the email in 1 hour, please check your spam box or call Customer Service at (866) 887-8884</p>
          <div className={`${style}`}>
        <div className={`${style.box1} `}>
        
         </div>
        </div>
        </div>
        <div className="modal-footer">
          {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
          <Link type="submit" className="btn btn-primary my-3 bg-success border border-success" to='/changePassword'>Back to SINGIN</Link>

          {/* <button type="button" className="btn btn-primary">Save changes</button> */}
        </div>
      </div>
    </div>
  </div>
   </>


  )
}
