import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin, faGithub
} from "@fortawesome/free-brands-svg-icons";

export default function Nav() {
    return (
        <div>
            <div className='h-20 flex items-center justify-between font-mono'>
                <Link to="/" className=' mx-5 hover:text-green-500 relative after:bg-white  after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'> CAMERON BRAMLEY</Link>
                <nav className='mr-5'>
                    <ul className='flex space-x-6'>
                        <li>
                            <Link to="https://www.linkedin.com/in/cameron-bramley-1561631b6/" > <FontAwesomeIcon icon={faLinkedin} size="3x" /></Link>
                        </li>
                        <li>
                            <Link to="https://github.com/Bramas03" > <FontAwesomeIcon icon={faGithub} size="3x" /></Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="w-full h-0.5 bg-white">
            </div>
        </div>



    );
}
