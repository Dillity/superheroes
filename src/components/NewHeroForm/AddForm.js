import React, {useEffect, useState} from "react";
import {Button, ButtonGroup} from "@mui/material";
import {Field, Form, Formik} from "formik";
import {validationSchema} from "../../validation/validation";


import {TextField} from 'formik-mui';

import "../../App.css"


const AddForm = (props) => {


    const handleSubmit = ({nickname, real_name, origin_description, superpowers, catch_phrase, images}) => {

        const getBase64 = (images) => {
            let reader = new FileReader();
            reader.readAsDataURL(images);
            reader.onload = () => {
                props.createSuperhero(nickname, real_name, origin_description, superpowers, catch_phrase, reader.result, props.currentPage);
                props.handleClose();
            };
        };
        getBase64(images);
    }


    return (
        <Formik initialValues={{nickname: '', real_name: '', origin_description: '', superpowers: '', catch_phrase: '', images: {   } }}
                validateOnBlur
                onSubmit={(values) => {
                    handleSubmit(values)
                }}
                validationSchema={validationSchema}
        >
            {({values,
                  handleChange, handleBlur,
                  isValid, handleSubmit, dirty, setFieldValue, touched, errors}) => (
                <Form>
                    <Field     sx={{mb: 1}}
                               component={TextField}
                               variant={'filled'}
                               fullWidth
                               required
                               type="text"
                               label={'Name'}
                               name={'nickname'}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               values={values.nickname}/>


                    <Field     component={TextField}
                               sx={{mb: 1}}
                               variant={'filled'}
                               fullWidth
                               required
                               type="text"
                               label={'Real name'}
                               name={'real_name'}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               values={values.real_name}/>


                    <Field     component={TextField}
                               sx={{mb: 1}}
                               variant={'filled'}
                               fullWidth
                               required
                               type="text"
                               label={'Description'}
                               name={'origin_description'}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               values={values.origin_description}/>


                    <Field     component={TextField}
                               sx={{mb: 1}}
                               variant={'filled'}
                               fullWidth
                               required
                               type="text"
                               label={'Superpowers'}
                               name={'superpowers'}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               values={values.superpowers}/>


                    <Field     component={TextField}
                               sx={{mb: 1}}
                               variant={'filled'}
                               fullWidth
                               required
                               type="text"
                               label={'Catch phrase'}
                               name={'catch_phrase'}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               values={values.catch_phrase}/>


                    <ButtonGroup sx={{mb: 1}}>

                                <Button variant="outlined" component="label">
                                    Upload
                                    <input onChange={(e) => {setFieldValue("images", e.currentTarget.files[0])}} name="images" values={values.images}
                                           hidden accept="image/*" multiple type="file" />
                                </Button>

                                <img
                                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/2fea277d-540b-42af-b152-782940dc49ef/de113ze-6e0911ea-ec5e-42b0-bb23-8f681ce0bebc.png"
                                    className="groot"/>

                    </ButtonGroup>


                        <Button color='primary'
                                fullWidth
                                variant='contained'
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                                type={'submit'}>Create your hero!</Button>

                </Form>
            )}
        </Formik>
    )
}

export default AddForm;