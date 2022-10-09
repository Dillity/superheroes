import {
    CHANGE_PAGE,
    CREATE_SUCCESS,
    GET_HERO, IS_ALL_ITEMS,
    IS_ANY_ITEMS,
    PREV_PAGE, SET_TOTAL_PAGES,
    TOTAL_DOCS_PER_PAGE,
    TOTAL_ITEMS
} from "./superheroesType";
import {superheroesAPI} from "../../api/api";

export const getHero = (data) => ({type: GET_HERO, data});
export const createSuccess = (status) => ({type: CREATE_SUCCESS, status});
export const setTotalItems = (data) => ({type: TOTAL_ITEMS, data});
export const setOnPageChange = (page) => ({type: CHANGE_PAGE, page});
export const setTotalDocsPerPage = (data) => ({type: TOTAL_DOCS_PER_PAGE, data});
export const setPrevPage = (data) => ({type: PREV_PAGE, data});
export const isAnyItems = (status) => ({type: IS_ANY_ITEMS, status});
export const isAllItems = (status) => ({type: IS_ALL_ITEMS, status});
export const setTotalPages = (data) => ({type: SET_TOTAL_PAGES, data});

export const getSuperheroes = (currentPage) => (dispatch) => {
    superheroesAPI.getSuperheroes(currentPage).then(response => {
        if(response.status === 200) {
            if(response.data.docs.length < 1) {
                dispatch(isAnyItems(false));
            } else {
                if(response.data.docs.length === 5) {
                    dispatch(isAllItems(true));
                    dispatch(setTotalPages(response.data.totalPages));
                }
                dispatch(isAnyItems(true));
                dispatch(setTotalItems(response.data.totalDocs));
                dispatch(getHero(response.data.docs));
                dispatch(setTotalDocsPerPage(response.data.docs.length));
                dispatch(setPrevPage(response.data.prevPage));
            }
        }
    });
}

export const createSuperhero = (nickname, real_name, origin_description, superpowers, catch_phrase, images, currentPage) => (dispatch) => {
    superheroesAPI.createSuperhero({nickname, real_name, origin_description, superpowers, catch_phrase, images}).then(response => {
        if(response.status === 200) {
            dispatch(createSuccess(true));
            dispatch(getSuperheroes(currentPage));
        }
    });
}

export const deleteSuperhero = (id, currentPage) => (dispatch) => {
    superheroesAPI.deleteSuperhero(id).then(response => {
        if(response.status === 200) {
            dispatch(getSuperheroes(currentPage));
        }
    });
}

export const updateSuperhero = (nickname, real_name, origin_description, superpowers, catch_phrase, images, id, currentPage) => (dispatch) => {
    superheroesAPI.updateSuperhero({nickname, real_name, origin_description, superpowers, catch_phrase, images, id}).then(response => {
        if(response.status === 200) {
            dispatch(getSuperheroes(currentPage));
        }
    });
}

export const changePage = (page) => (dispatch) => {
    dispatch(setOnPageChange(page));
}
