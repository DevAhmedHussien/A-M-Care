import { GlobalContext } from "../../Context/GlobalContext"
import {Box,Toolbar,IconButton,Typography,Menu,Button,Container} from '@mui/material';
import { useContext, useEffect } from "react";
import Upper from "./upper/Upper";
export default function Cart(){
    const context = useContext(GlobalContext)
    const { basket ,setBasket} = context
    return (
        <>
            <Upper/>
        </>
    )
}