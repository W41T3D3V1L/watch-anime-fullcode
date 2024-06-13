import React from 'react';
import Logo from '../images/icon.png'
import { FaInstagram, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const getCurrentYear = () => {
  return new Date().getFullYear();
}

const Footer = () => {
  return (
    <footer className='bg-black text-white text-center mt-auto' > 
      <div className='flex p-4 mb-0 pb-0 text-gray-400 text-[13px] md:flex-col items-center'  >
        <div >&#169; {getCurrentYear()} WatchAnime.  |  Website made by <a href="https://gdk-dev-threejs.vercel.app/" className='font-semibold text-white'>WhiteDevil</a> </div>
        <div className='felx ml-96 mr-64 md:mr-0 md:ml-0 md:py-2 items-center md:justify-start justify-center'>
          <a href="/about" className='text-gray-400 hover:font-semibold ease-out duration-300 ...'>About</a> | <a href="/contact" className='text-gray-400 hover:font-semibold ease-in duration-300 ...'>Contact</a> | <a href="/privacy" className='text-gray-400 hover:font-semibold ease-out duration-300 ...'>Privacy Policy</a>
        </div>
        <div className='flex ml-auto mr-4 md:items-center   justify-center  md:p-1 md:m-0 md:w-full'>
        {[
                {
                  href: 'https://x.com/DhanushG02',
                  Icon: FaTwitter,
                  label: 'Twitter',
                },
                {
                  href: 'https://www.instagram.com/white__devil2468/',
                  Icon: FaInstagram,
                  label: 'Instagram',
                },
                {
                  href: 'https://github.com/Dhanush2468',
                  Icon: FaGithub,
                  label: 'GitHub',
                },
                {
                  href: 'https://www.linkedin.com/in/whitedevil2468/',
                  Icon: FaLinkedin,
                  label: 'LinkedIn',
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1 mt-auto mb-5 focus:outline-none text-gray-600 md:text-gray-600 ml-2 scale-125 hover:text-white hover:scale-150 ease-out duration-300 ..."
                >
                  <Icon />
                </a>
                
            ))}
        </div>
      </div>

    </footer>
  )
}

export default Footer
