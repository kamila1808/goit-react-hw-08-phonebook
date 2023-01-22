import { useDispatch, useSelector } from "react-redux"
import { logout } from "redux/auth/auth-operations";
import { selectName } from "redux/auth/auth-selectors";

import { Div, Button, P } from "./UserAuthMenu.styled";


export const UserAuthMenu = () => {
const dispatch = useDispatch();
const name = useSelector(selectName);

    return (
        <Div>
        <P>{`Welcome, ${name}!`}</P>
        <Button type="button" onClick={() => dispatch(logout())}>Logout</Button> 
        </Div>       
    )
}