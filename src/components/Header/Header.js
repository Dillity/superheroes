import React, {useState} from "react";
import "../../App.css"
import {Button, Dialog, DialogContent, DialogTitle, Typography} from "@mui/material";
import AddForm from "../NewHeroForm/AddForm";


const Header = (props) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }


    return (
        <div className='header'>
            <div>
                <Typography sx={{pb: 2, pt: 1}} variant='h3' color='inherit'>
                    Superheroes
                </Typography>
            </div>
            <div>
                <Button variant="contained" sx={{m: 2}} onClick={handleOpen}>Add new hero!</Button>
            </div>
            <div>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>
                        Get ready, the storm is coming...
                    </DialogTitle>
                    <DialogContent>
                        <AddForm createSuperhero={props.createSuperhero} handleClose={handleClose} currentPage={props.currentPage} isAllItems={props.isAllItems} totalPages={props.totalPages}/>
                    </DialogContent>
                </Dialog>
            </div>


        </div>
    );
}

export default Header;