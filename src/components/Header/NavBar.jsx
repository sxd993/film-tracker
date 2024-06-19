import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="flex items-center gap-5 rounded-lg text-xl">
            <Link to='/catalog' className="px-5 py-2 rounded-3xl hover:bg-slate-300">Catalog</Link>
            <Link to='/about-us' className="px-5 py-2 rounded-3xl hover:bg-slate-300">About Us</Link>
            <Link to='/support' className="px-5 py-2 rounded-3xl hover:bg-slate-300">Support</Link>
        </nav>
    )
}