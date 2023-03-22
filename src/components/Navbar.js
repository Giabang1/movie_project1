import { BiCameraMovie } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import "./Nav.css";

function Navbar() { 
    return (
        <>
            <nav>
                <IconContext.Provider
                value={{ color: 'white', size: '100px' }}>
                    <a href='index.html'>
                        <BiCameraMovie/>
                    </a>
                </IconContext.Provider>
                <div class="g-signin2" data-onsuccess="onSignIn"></div>          
            </nav>
        </>
    )
}
export default Navbar;