import React from "react";
import {connect} from "react-redux";
import {createSuperhero} from "../../redux/superheroes/superheroesAction";
import Header from "./Header";
import {getCurrentPage, getIsAllItems, getTotalPages} from "../../selectors/selectors";


const HeaderContainerComponent = (props) => {
    return (
        <Header {...props} />
    );
}



let mapStateToProps = (state) => {
    return {
        currentPage: getCurrentPage(state),
        isAllItems: getIsAllItems(state),
        totalPages: getTotalPages(state)
    }
}

export const HeaderContainer = connect(mapStateToProps, {createSuperhero})(HeaderContainerComponent);