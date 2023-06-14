import  *  as Yup from 'yup';
export const logSchema= Yup.object({
    email:Yup.string().email().required(),
    password:Yup.string().required(),

    // password:Yup.string().required().matches(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,30}$/),
})