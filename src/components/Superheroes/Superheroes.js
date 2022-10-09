import React, {useEffect, useState} from "react";
import {Alert, Container, Grid, Pagination, Snackbar} from "@mui/material";
import Hero from "./Hero";

import "../../App.css"

const Superheroes = (props) => {

    const pagesCount = Math.ceil(props.totalItems / props.pageLimit);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(props.createSuccess) {
            setOpen(true);
        }
    }, [props.createSuccess]);

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (e) => {
        props.changePage(e.target.innerText);
    }

    return (
        <div className="mainWrapper">
            <Container>
                <Grid container spacing={2} className="mainContainer">
            {props.heroes.map(hero => <Hero key={hero._id} id={hero._id} nickname={hero.nickname} realName={hero.real_name}
                                            img={hero.images} currentPage={props.currentPage}
                                            originDescription={hero.origin_description} superpowers={hero.superpowers}
                                            catchPhrase={hero.catch_phrase} deleteSuperhero={props.deleteSuperhero} updateSuperhero={props.updateSuperhero}
                                            totalDocsPerPage={props.totalDocsPerPage} prevPage={props.prevPage}/>)}
                </Grid>
            </Container>

            <Pagination onClick={(e) => {handleChange(e)}}
                        variant="outlined" shape="rounded"
                        count={pagesCount} hideNextButton hidePrevButton className="pagination"/>

            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose}>
                    Your hero is ready for battle!
                </Alert>
            </Snackbar>

        </div>
    );
}

export default Superheroes;