import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { database, userr } from '../Firebase';
import { signOut } from 'firebase/auth';
import Swal from 'sweetalert2';
import { ImExit } from 'react-icons/im';
import { BiSolidUserCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  let navigate = useNavigate()
  const handleLogOut = () => {
    signOut(database)
      .then(() => {
        Swal.fire({
          text: "Logout successfully",
          icon: "success",
          buttons: false,
          timer: 3000,
        });
        localStorage.removeItem('userUID');
        localStorage.removeItem('user');
        setTimeout(function () {
          window.location.reload();
        }, 1000);

      })
      .catch(error => {
        console.error("Sign out error:", error);
      });
  };


  let LogInToken = localStorage.getItem('userUID') ?? '';
  let isLoggedIn = false;
  if (LogInToken !== '') {
    isLoggedIn = true
  } else {
    isLoggedIn = false
  }

  const [navbar, setNavbar] = useState(false);

  const navLinkStyles = ({ isActive }) => {
    return {
      borderBottom: isActive ? "#f97316 1px solid" : "none"
    };
  };
  return (
    <>
    

      <nav className="w-full navbar bg-cyan-900 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to={'/'} className="flex items-center justify-between py-2">
                <h2 className="text-3xl font-bold text-white flex items-center">
                  <span className='w-1/3 pr-4'><img src="/android-chrome-512x512.png" alt="BlogPost Logo" className="h-8 w-8" /></span>
                  BlogPost
                </h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-50 font-bold transition-all duration-400 hover:text-orange-600">
                  <NavLink style={navLinkStyles}  to={'/'} href="javascript:void(0)">Home</NavLink>
                </li>
                <li className="text-gray-50 font-bold transition-all duration-400 hover:text-orange-600">
                  <NavLink style={navLinkStyles}  to={'/blogs'} href="javascript:void(0)">Blogs</NavLink>
                </li>
                <li className="text-gray-50 font-bold transition-all duration-400 hover:text-orange-600">
                  <NavLink style={navLinkStyles}  to={'/about'} href="javascript:void(0)">About US</NavLink>
                </li>
                {isLoggedIn ?
                  <>
                    <li className="text-gray-50 bg-orange-600 px-2 py-1 rounded-md font-bold transition-all duration-400 hover:bg-orange-700 text-center active:bg-orange-800">
                      <Link to={'/addblog'} href="javascript:void(0)">Add Blogs</Link>
                    </li>
                    <li className="text-gray-50 bg-orange-600 px-2 py-1 rounded-md font-bold transition-all duration-400 hover:bg-orange-700 text-center active:bg-orange-800">
                      <button onClick={handleLogOut}>Log Out</button>
                    </li>
                    {userr &&
                      <Link to={`/user/${userr.userDocumentId}`}>
                        <li className='w-10 mt-4 md:mt-0 h-10 rounded-full'><img className='w-full h-full rounded-full ' src={userr.image_url} alt="" /></li></Link>}
                  </>
                  :
                  <li className="text-gray-50 bg-orange-600 px-2 py-1 rounded-md font-bold transition-all duration-400 hover:bg-orange-700 text-center active:bg-orange-800">
                    <Link to={"/signup"}>Sign Up</Link>
                  </li>
                }
              </ul>
            </div>
          </div>
        </div>
      </nav>




    </>
  )
}

export default Navbar
