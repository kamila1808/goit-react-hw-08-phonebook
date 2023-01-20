import { useDispatch, useSelector } from "react-redux"
import { logout } from "redux/auth/auth-operations";
import { selectName } from "redux/auth/auth-selectors";


export const UserAuthMenu = () => {
const dispatch = useDispatch();
const name = useSelector(selectName);

    return (
        <div>
        <p>{`Welcome, ${name}!`}</p>
        <button type="button" onClick={() => dispatch(logout())}>Logout</button> 
        </div>       
    )
}