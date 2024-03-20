import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'NotFound', path: '*' }
      ];
    return (
        <nav className="bg-yellow-200 p-6 text-black">
            <div className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose /> : <RiMenu2Line />
                }
            </div>
            <ul className={` ${open ? 'block' : 'hidden'} md:flex duration-300 absolute md:static bg-yellow-200 p-5 md:p-1`}>
                {
                    routes.map((route) => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;