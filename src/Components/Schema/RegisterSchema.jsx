import  *  as Yup from 'yup';
export const regSchema= Yup.object({
    email:Yup.string().email().required(),
    userName:Yup.string().required().min(3).max(5),
    // password:Yup.string().required().matches(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,30}$/),
    password:Yup.string().required(),
    cPassword:Yup.string().required().oneOf([Yup.ref('password')])
})