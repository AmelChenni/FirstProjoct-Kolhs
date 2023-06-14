import  *  as Yup from 'yup';
export const codeSchema= Yup.object({
    email:Yup.string().email().required(),
    // password:Yup.string().required().matches(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,30}$/),
})