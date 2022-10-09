import React, {useState} from "react";
import {Button, ButtonGroup, Typography} from "@mui/material";
import {validationSchema} from "../../validation/validation";
import {Field, Form, Formik} from "formik";
import {TextField} from 'formik-mui';


const EditForm = (props) => {

    const [groot, setGroot] = useState(true);

    const handleSubmit = ({nickname, real_name, origin_description, superpowers, catch_phrase, images}) => {
        props.updateSuperhero(nickname, real_name, origin_description, superpowers, catch_phrase, props.images, props.id, props.currentPage);
        props.setEditMode(false);
        const getBase64 = (images) => {
            let reader = new FileReader();
            reader.readAsDataURL(images);
            reader.onload = () => {
                props.updateSuperhero(nickname, real_name, origin_description, superpowers, catch_phrase, reader.result, props.id, props.currentPage);
                props.setEditMode(false);
            };
        };
        getBase64(images);
    }


    return (
        <Formik initialValues={{nickname: props.nickname, real_name: props.realName, origin_description: props.originDescription, superpowers: props.superpowers, catch_phrase: props.catchPhrase, images: props.images}}
                validateOnBlur
                onSubmit={(values) => {
                    handleSubmit(values)
                }}
                validationSchema={validationSchema}
        >
            {({   handleChange, handleBlur,
                  isValid, dirty, setFieldValue, values, touched, errors}) => (
            <Form>

                <Button sx={{mb: 1}} variant="contained" disabled={!isValid && !dirty} type='submit'>Save</Button>

                <Field     component={TextField}
                           sx={{mb: 1}}
                           variant="filled"
                           fullWidth
                           required
                           type="text"
                           label='Name'
                           name='nickname'
                           onChange={handleChange}
                           onBlur={handleBlur}
                />


                <Field     component={TextField}
                           sx={{mb: 1}}
                           variant="filled"
                           fullWidth
                           required
                           type="text"
                           label='Real name'
                           name='real_name'
                           onChange={handleChange}
                           onBlur={handleBlur}
                    />

                <Field     component={TextField}
                           sx={{mb: 1}}
                           variant="filled"
                           fullWidth
                           required
                           type="text"
                           label={'Description'}
                           name={'origin_description'}
                           onChange={handleChange}
                           onBlur={handleBlur}
                      />

                <Field     component={TextField}
                           sx={{mb: 1}}
                           variant="filled"
                           fullWidth
                           required
                           type="text"
                           label={'Superpowers'}
                           name={'superpowers'}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           />

                <Field     component={TextField}
                           sx={{mb: 1}}
                           variant="filled"
                           fullWidth
                           required
                           type="text"
                           label={'Catch phrase'}
                           name={'catch_phrase'}
                           onChange={handleChange}
                           onBlur={handleBlur}
                          />

                <ButtonGroup sx={{mb: 1}}>

                    <Button variant="outlined" component="label">
                        Upload
                        <input onChange={(e) => {setFieldValue("images", e.currentTarget.files[0])}} name="images" values={values.images} hidden accept="image/*" multiple type="file"/>
                    </Button>

                    <img onClick={() => setGroot(!groot)}
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/2fea277d-540b-42af-b152-782940dc49ef/de113ze-6e0911ea-ec5e-42b0-bb23-8f681ce0bebc.png"
                        className="groot" />
                    {!groot &&
                        <Typography color="secondary">I am Groot</Typography>
                    }

                </ButtonGroup>


            </Form>
        )}
        </Formik>
    );
}

export default EditForm;