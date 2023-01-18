import { useDispatch } from "react-redux"
import { logout } from "redux/auth/auth-operations";

export const UserAuthMenu = () => {
const dispatch = useDispatch();

    return (
        <div>
        <p>Welcome</p>
        <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}