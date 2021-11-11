import * as yup from 'yup';

const formSchema = yup.object().shape({
    fname: yup
        .string()
        .trim()
        .required('Name is required'),
    lname: yup
        .string()
        .trim()
        .required('Last name is required'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('You must have an email.'),
    password: yup
        .string()
        .trim()
        .required('You gotta have a password.'),
    terms: yup
        .boolean()
        .oneOf([true], 'Accept the terms, OR ELSE')
    
})

export default formSchema;