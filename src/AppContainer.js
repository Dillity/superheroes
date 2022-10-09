import React from "react";
import App from "./App";
import {getIsAnyItems} from "./selectors/selectors";
import {connect} from "react-redux";
import {getSuperheroes} from "./redux/superheroes/superheroesAction";

const AppContainerComponent = (props) => {

    return (
        <div>
            {props.isAnyItems !== undefined &&
                <App {...props} />
            }
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        isAnyItems: getIsAnyItems(state)
    }
}

export const AppContainer = connect(mapStateToProps, {getSuperheroes})(AppContainerComponent);
