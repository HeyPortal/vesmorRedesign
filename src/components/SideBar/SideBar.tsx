import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

import { PersonIcon, BackpackIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { SideBarButton, buttonVariants } from "@/components/SideBar/SideBarButton";
import { MailIcon } from 'lucide-react';
import './SideBar.css';

interface SideBarProps {
    isActive: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ isActive }) => {
    const activeStyles = (

        'bg-slate-900 '
    );
    

    return (


        <div className={"sidebar z-10 p-4 h-full w-60 left-0 top-0 m-0 fixed overflow-x-hidden bg-foreground text-white flex flex-col justify-between "
            + (isActive ? 'sidebar-is-active' : '')
        } >
            <div>
                <div className='top-header mb-14'>
                    <a href='/'>
                        <img src='/assets/images/sidebar_profile.jpg' alt="Profile Picture" className="profile-pic w-40 h-32 rounded-3xl mx-auto mb-4 border-2" />
                    </a>
                    <div className='name'>
                        <h1 className=" text-center text-xl font-bold">Sev Charles</h1>
                    </div>
                    <div className="blurb text-center mb-4 text-gray-600 font-semibold">
                        <p>Computer Science graduate and Software Engineer creating solutions across different domains.</p>
                    </div>
                </div>

                <nav className="nav-links space-y-2 mb-4">
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `${buttonVariants({ variant: "default" })} hover:border-transparent hover:text-gray-600 hover:bg-slate-900 rounded-lg ${isActive ? activeStyles : ''}`
                        }
                    >
                        <PersonIcon className="mr-2 h-4 w-4 text-white" /> About
                    </NavLink>

                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            `${buttonVariants({ variant: "default" })} hover:border-transparent hover:text-gray-600 hover:bg-slate-900 rounded-lg ${isActive ? activeStyles : ''}`
                        }
                    >
                        <BackpackIcon className="mr-2 h-4 w-4 text-white" /> Projects
                    </NavLink>
                </nav>
            </div>

            <div className="bottom-links relative flex justify-around">
                <a href="https://github.com/vesmor" target="_blank" rel="noopener noreferrer" className='text-inherit flex items-center justify-center hover:bg-foreground hover:border-none'>
                    <GitHubLogoIcon className="w-6 h-6 hover:text-gray-600 text-white" />
                </a>

                <a href="https://www.linkedin.com/in/sev-charles/" target="_blank" rel="noopener noreferrer" className='text-inherit flex items-center justify-center hover:bg-foreground hover:border-none'>
                    <LinkedInLogoIcon className="w-6 h-6 hover:text-gray-600 text-white" />
                </a>

                <a href="mailto:romsev.charles@gmail.com" className='text-inherit flex items-center justify-center hover:bg-foreground hover:border-none '>
                    <MailIcon className="w-6 h-6 hover:text-gray-600 text-white" />
                </a>
            </div>
        </div>
    );
};

export default SideBar;
