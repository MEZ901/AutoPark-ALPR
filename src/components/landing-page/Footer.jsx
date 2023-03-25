import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <footer className="p-4 bg-white absolute right-0 left-0 sm:p-6">
        <div className="mx-auto max-w-screen-xl">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link to="#" className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap uppercase">auto<span className='text-blue-500'>park</span></span>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                        <ul className="text-gray-600">
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">Blog</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:underline">Careers</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                        <ul className="text-gray-600">
                            <li className="mb-4">
                                <Link to="#" className="hover:underline">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:underline">Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center">© 2023 <a href="#" className="hover:underline">AutoPark™</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <Link to="#" className="text-gray-500 hover:text-gray-900">
                        <LinkedInIcon />
                    </Link>
                    <Link to="#" className="text-gray-500 hover:text-gray-900">
                        <FacebookIcon />
                    </Link>
                    <Link to="#" className="text-gray-500 hover:text-gray-900">
                        <InstagramIcon />
                    </Link>
                    <Link to="#" className="text-gray-500 hover:text-gray-900">
                        <TwitterIcon />
                    </Link>
                    <Link to="#" className="text-gray-500 hover:text-gray-900">
                        <GitHubIcon />
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;