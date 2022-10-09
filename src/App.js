import {SuperheroesContainer} from "./components/Superheroes/SuperheroesContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";

import "./App.css"
import {Fragment, useEffect, useState} from "react";
import {Button, Typography} from "@mui/material";

const App = (props) => {

    useEffect(() => {
        props.getSuperheroes(1);
    }, [props.isAnyItems]);

    const [message, setMessage] = useState(false);
    const [initialized, setInitialized] = useState(false);

    setTimeout(() => {
        setInitialized(true);
    }, 3000);

  return (
    <div>
        {initialized ?
            <Fragment>
                <HeaderContainer/>
                {props.isAnyItems === false ?
                    <div className="loadingTitle">
                        <Typography sx={{mb: 2, mt: 2}} variant="h4">There are no heroes on your list
                            yet...</Typography>
                        <Typography sx={{mb: 1}} variant="h5">Click the button above to add some!</Typography>
                        <div className="mainGroot">

                            {message === true ?
                                <div>
                                    <Button sx={{width: 200, mb: 2}} onClick={() => setMessage(!message)} width="100px">I
                                        am
                                        groot</Button>
                                    <img src="https://images.prom.ua/1769514109_w640_h640_figurka-malysh-grut.jpg"
                                         className="mainGroot"/>
                                </div>
                                :
                                <Button sx={{width: 200}} onClick={() => setMessage(true)}>Click on me</Button>
                            }
                        </div>
                    </div>
                    :
                    <SuperheroesContainer/>
                }
            </Fragment> :
            <div className="initialized">
                <img className="initializedImage" src="https://www.comicbasics.com/wp-content/uploads/2020/08/The-Top-10-Greatest-Superheroes-Without-Superpowers-In-Comics-Today.jpg" />
                <Typography className="initializedTitle" variant="h2">A great adventure is waiting for you ahead.</Typography>
            </div>
        }

    </div>
  );
}

export default App;
