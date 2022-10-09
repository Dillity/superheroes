
import {
    CHANGE_PAGE,
    CREATE_SUCCESS,
    GET_HERO,
    IS_ALL_ITEMS,
    IS_ANY_ITEMS,
    PREV_PAGE, SET_TOTAL_PAGES,
    TOTAL_DOCS_PER_PAGE,
    TOTAL_ITEMS
} from "./superheroesType";

let initialState = {
    superheroes: [],
    createSuccess: false,
    totalItems: null,
    pageLimit: 5,
    currentPage: 1,
    totalDocsPerPage: null,
    prevPage: null,
    isAnyItems: false,
    isAllItems: false,
    totalPages: null
}

const superheroesReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_HERO:
            return {
                ...state,
                superheroes: action.data
            }

        case CREATE_SUCCESS:
            return {
                ...state,
                createSuccess: action.status
            }

        case TOTAL_ITEMS:
            return {
                ...state,
                totalItems: action.data
            }

        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.page
            }

        case TOTAL_DOCS_PER_PAGE:
            return {
                ...state,
                totalDocsPerPage: action.data
            }

        case PREV_PAGE:
            return {
                ...state,
                prevPage: action.data
            }

        case IS_ANY_ITEMS:
            return {
                ...state,
                isAnyItems: action.status
            }

        case IS_ALL_ITEMS:
            return {
                ...state,
                isAllItems: action.status
            }

        case SET_TOTAL_PAGES:
            return {
                ...state,
                totalPages: action.data
            }

        default:
            return state;
    }
}

export default superheroesReducer;

