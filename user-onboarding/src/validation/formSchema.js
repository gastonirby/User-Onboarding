import * as yup from 'yup';

const formSchema = yup.object().shape({
    fname: yup
    .string()
    .trim()
    .required('Username is required ya chump!!'),
    lname: yup
        .string()
        .trim()
        .required('Username is required ya chump!!'),
    email: yup
        .string()
        .email('Must be a valid email address ya chump!!')
        .required('You gotta have an email.'),
    role: yup
        .string()
        .oneOf(['student', 'instructor', 'alumni', 'tl'], 'Role is required!!!'),
    civil: yup
        .string()
        .oneOf(['married', 'single'], 'Civil status is required!!!'),
    coding: yup.boolean(),
    reading: yup.boolean(),
    hiking: yup.boolean()
})

export default formSchema;