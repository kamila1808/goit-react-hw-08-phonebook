import { H1, Img } from "./HomePage.styled"
import phonebook from '../img/address_book.png';

export const HomePage = () => {
    return (<>
    <H1>Welcome to Phonebook!</H1>
    <Img src={phonebook} alt="phonebook" width={250} height={300}/>
    </>)
}