import Logo from "./Logo"
import NavBar from "./NavBar"
import UserProfile from "./UserProfile"

export default function Header() {
    return (
        <header className="flex justify-between w-11/12 mx-auto">
            <Logo/>
            <NavBar/>
            <UserProfile/>
        </header>
    )
}