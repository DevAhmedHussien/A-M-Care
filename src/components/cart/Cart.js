import { GlobalContext } from "../../Context/GlobalContext"
import { useContext, useEffect } from "react";
import CheckOut from "./checkOut/CheckOut";
export default function Cart(){
    const context = useContext(GlobalContext)
    const { basket ,setBasket} = context
    return (
        <>
            <CheckOut/>
        </>
    )
}