import React, {Fragment, useState} from "react";
import {Button, Card, Grid, IconButton, Typography} from "@mui/material";

import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import EditForm from "./EditMode";

import "../../App.css"

const Hero = (props) => {

    const [readMore, setReadMore] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const handleDelete = (id, currentPage) => {
        if(props.totalDocsPerPage === 1) {
            props.deleteSuperhero(id, props.prevPage);
        } else {
            props.deleteSuperhero(id, currentPage);
        }
    }


    return (
        <Grid item>
            <Card sx={{p: 2, m: 1}}>
                {editMode ? <EditForm setEditMode={setEditMode} {...props} /> :
                    <Fragment>

                            <img src={props.img} className="mainImage" />



                        <Typography><b>Name:</b> {props.nickname}</Typography>

                        {readMore &&
                            <Fragment>
                                <Typography><b>Real name:</b> {props.realName}</Typography>
                                <Typography><b>Description:</b> {props.originDescription}</Typography>
                                <Typography><b>Superpowers:</b> {props.superpowers}</Typography>
                                <Typography><b>Catch phrase:</b> {props.catchPhrase}</Typography>
                            </Fragment>
                        }
                        <Grid container alignItems="center">
                            <Grid item flexGrow={1} >
                                <Button variant="outlined" size="small" onClick={() => setReadMore(!readMore)}>{readMore ? 'Show less' : 'Read more'}</Button>
                            </Grid>
                            <Grid item>
                                <IconButton onClick={() => {setEditMode(true)}}>
                                    <EditIcon/>
                                </IconButton>

                                <IconButton onClick={() => {handleDelete(props.id, props.currentPage)}}>
                                    <ClearIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Fragment>
                }
            </Card>
        </Grid>
    );
}

export default Hero;