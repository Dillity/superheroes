import * as yup from "yup";

export const validationSchema = yup.object().shape({
    nickname: yup.string().required('Field is required').min(4, 'Too short!').max(40, 'Too long!'),
    real_name: yup.string().required('Field is required').min(4, 'Too short!').max(40, 'Too long!'),
    origin_description: yup.string().required('Field is required').min(10, 'Too short!').max(600, 'Too long!'),
    superpowers: yup.string().required('Field is required').min(6, 'Too short!').max(500, 'Too long!'),
    catch_phrase: yup.string().required('Field is required').min(6, 'Too short!').max(200, 'Too long!'),
});
