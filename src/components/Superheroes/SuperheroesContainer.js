import React, {useEffect} from "react";
import {changePage, deleteSuperhero, getSuperheroes, updateSuperhero} from "../../redux/superheroes/superheroesAction";
import Superheroes from "./Superheroes";
import {connect} from "react-redux";
import {
    getCreateSuccess,
    getCurrentPage,
    getHeroes,
    getImages,
    getPageLimit,
    getPrevPage,
    getTotalDocsPerPage,
    getTotalItems
} from "../../selectors/selectors";


const SuperheroesContainerComponent = (props) => {

    useEffect(() => {
        props.getSuperheroes(props.currentPage);
    }, [props.currentPage]);

    return (
        props.heroes.length > 0 &&
        <Superheroes {...props} />
    );
}

let mapStateToProps = (state) => {
    return {
        heroes: getHeroes(state),
        createSuccess: getCreateSuccess(state),
        totalItems: getTotalItems(state),
        pageLimit: getPageLimit(state),
        currentPage: getCurrentPage(state),
        images: getImages(state),
        totalDocsPerPage: getTotalDocsPerPage(state),
        prevPage: getPrevPage(state)
    }
}

export const SuperheroesContainer = connect(mapStateToProps, {getSuperheroes, deleteSuperhero, updateSuperhero, changePage})(SuperheroesContainerComponent);