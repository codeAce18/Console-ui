import React, { useState, useEffect } from 'react';
import HamburgerMenu from "../assets/HamburgerMenu.svg";
import Arrowdown from "../assets/Arrowdown.svg";
import SearchIcon from "../assets/SearchIcon.svg";
import GeminiLogo from "../assets/GeminiLogo.svg";
import Gift from "../assets/Gift.svg";
import ActivateCloudIcon from "../assets/ActivateCloudIcon.svg";
import NotificationIcon from "../assets/NotificationIcon.svg";
import QuestionCircle from "../assets/QuestionCircle.svg";
import MoreVert from "../assets/MoreVert.svg";

import ArrowRight from "../assets/ArrowRight.svg";

import CrossLarge from "../assets/CrossLarge.svg"

import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            // Close mobile menu and search if screen becomes larger
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
                setIsSearchVisible(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sidebarVariants = {
        hidden: { 
            x: '-100%',
            transition: {
                type: 'tween',
                duration: 0.3
            }
        },
        visible: { 
            x: 0,
            transition: {
                type: 'tween',
                duration: 0.3
            }
        }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 0.5 }
    };

    const iconConfigs = [
        {
            icon: GeminiLogo, 
            alt: "GeminiLogo",
            content: (
              <div className="bg-white w-[300px] shadow-md p-4 rounded-lg">
                <h3 className="font-semibold">Gemini AI</h3>
                <p className="text-sm">Access advanced AI capabilities</p>
              </div>
            )
          },
          {
            icon: Gift, 
            alt: "Gift",
            content: (
              <div className="bg-white w-[300px] shadow-md p-4 rounded-lg">
                <h3 className="font-semibold">Promotions</h3>
                <p className="text-sm">Check out current offers</p>
              </div>
            )
          },
          {
            icon: ActivateCloudIcon, 
            alt: "ActivateCloudIcon",
            content: (
              <div className="bg-white w-[300px] shadow-md p-4 rounded-lg">
                <h3 className="font-semibold">Activate Cloud</h3>
                <p className="text-sm">Set up your cloud services</p>
              </div>
            )
          },
          {
            icon: NotificationIcon, 
            alt: "NotificationIcon",
            content: (
                <div className='pt-[8px]'>
                  <div className="bg-white w-[400px] shadow-md p-4 rounded-lg">
                   
                    <div className='border-b pb-[16px]'>
                        <h1 className='text-center text-[15px]'>Notifications</h1>
                    </div>
        
                    <div className='pt-[10px]'>
                        <div className='flex items-start justify-between rounded-[8px] bg-gray-100 p-[10px] w-full'>
                            <div className=' space-y-[10px]'>
                                <h1 className="text-[13px]">Create Project:My First Project</h1>
                                <h1 className='text-[14px] text-blue-600 font-medium'>SELECT PROJECT</h1>
                            </div>
                            <p className='text-[10px]'>1 day ago</p>
                        </div>
                    </div>
        
                    <div className='pt-[10px]'>
                        <div className='flex items-start justify-between p-[10px] w-full'>
                            <div className=' space-y-[10px]'>
                                <h1 className="text-[13px]">Create Project:My First Project</h1>
                                <h1 className='text-[14px] text-blue-600 font-medium'>SELECT PROJECT</h1>
                            </div>
                            <p className='text-[10px]'>3 day ago</p>
                        </div>
                    </div> 
                  </div>
                </div>
                
            )
          },
          {
            icon: QuestionCircle, 
            alt: "QuestionCircle",
            content: (
                <div className='pt-[8px]'>
                    <div className="bg-white w-[250px] shadow-md p-4">
                        <div className='border-b pb-[10px] space-y-[10px]'>
                            <h1 className='text-[15px] cursor-pointer  hover:bg-gray-200 p-[5px] hover:p-[5px] rounded-[8px]'>Browse Documentation</h1>
        
                            <h1 className='cursor-pointer text-[15px] hover:bg-gray-200 p-[5px] hover:p-[5px] rounded-[8px]'>View architecture guides</h1>
        
                            <h1 className='cursor-pointer text-[15px] hover:bg-gray-200 p-[5px] hover:p-[5px] rounded-[8px]'>View help FAQs</h1>
        
                            <h1 className='cursor-pointer text-[15px] hover:bg-gray-200 p-[5px] hover:p-[5px] rounded-[8px]'>Start a tutorial</h1>
                        </div>
        
                        <div className='border-b pb-[10px] pt-[10px]'>
                            <h1 className='text-[15px]'>Get support</h1>
        
                            <p className='text-[12px]'>Live and self-service support options</p>
                        </div>
        
                        <div className='pt-[10px] border-b pb-[10px]'>
                            <h1 className=' cursor-pointer text-[15px] hover:bg-gray-200 p-[5px] hover:p-[5px] rounded-[8px]'>Configured keyboard shortcuts</h1>
                        </div>
        
                        <div className='pt-[10px]'>
                            <h1 className='cursor-pointer text-[15px] hover:bg-gray-200 p-[5px] hover:p-[5px] rounded-[8px]'>Send feedback</h1>
                        </div>
                    </div>
                </div>
            )
          },
          {
            icon: MoreVert, 
            alt: "MoreVert",
            content: (
                <div className='pt-[8px]'>
                  <div className="bg-white w-[150px] space-y-[20px] flex flex-col items-start   px-[20px] py-[20px] shadow-lg">
                    <div className='border-b-[1px] pb-[10px] w-full'>
                        <h1 className='cursor-pointer text-[15px] hover:bg-gray-200 p-[6px] hover:p-[6px] rounded-[8px]'>Preferences</h1>
                    </div>
                    <div className='border-b-[1px] pb-[10px] w-full space-y-[10px]'>
                        <h1 className='cursor-pointer text-[15px] hover:bg-gray-200 p-[5px] hover:p-[5px] rounded-[8px]'>Downloads</h1>
                        <h1 className='cursor-pointer text-[15px] hover:bg-gray-200 p-[5px] hover:p-[5px] rounded-[8px] whitespace-nowrap'>Cloud Partners</h1>
                    </div>
                    <div className='space-y-[10px]'>
                        <h1 className='cursor-pointer text-[15px] hover:bg-gray-200 p-[5px] hover:p-[5px] rounded-[8px] whitespace-nowrap'>Terms of service</h1>
                        <h1 className='cursor-pointer text-[15px] hover:bg-gray-200 p-[5px] hover:p-[5px] rounded-[8px]'>Privacy</h1>
                    </div>
                  </div>
              </div>
            )
        }
    ];

    const toggleDropdown = (alt) => {
        setActiveDropdown(activeDropdown === alt ? null : alt);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Close search when opening menu
        setIsSearchVisible(false);
    };

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
        // Close mobile menu when opening search
        setIsMobileMenuOpen(false);
    };

    const renderDesktopHeader = () => (
        <div className='hidden md:flex items-center justify-between px-6 py-[5px]'>
            <div 
                className="flex items-center gap-[20px] cursor-pointer"
                onClick={toggleSidebar}
            >
                <img width={24} height={24} src={HamburgerMenu} alt="HamburgerMenu" />
                <h1 className="text-[20px] leading-[39px] font-medium text-[#707070]">Console</h1>
            </div>

            <AnimatePresence>
                {isSidebarOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div 
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={overlayVariants}
                            className="fixed inset-0 bg-black z-40"
                            onClick={toggleSidebar}
                        />

                        {/* Sidebar */}
                        <motion.div 
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={sidebarVariants}
                            className="fixed top-0 left-0 w-[300px] h-full bg-white z-50 shadow-lg "
                        >
                            <div className="p-2 px-8">
                                <div className="flex gap-10 items-center border-b pb-2">
                                    <button 
                                        onClick={toggleSidebar} 
                                        className="text-gray-600 hover:text-gray-900"
                                    >
                                        <img width={18} height={18} src={CrossLarge} alt="CrossLarge" />
                                    </button>
                                    <h2 className="text-[20px] leading-[39px] font-medium text-[#707070]">Console</h2>
                                </div>
                                
                                <div>
                                    <nav className="mt-4">
                                        <ul className="space-y-2">
                                            {/* Dashboard Menu */}
                                            <li className="relative group hover:bg-gray-100 p-2 rounded flex items-center justify-between">
                                                <a href="#" className="block text-[15px]">Cloud Overview</a>
                                                
                                                <img width={18} height={18} src={ArrowRight} alt="ArrowRight" />

                                                {/* Submenu */}
                                                <ul className="absolute left-full top-0 hidden group-hover:block bg-white  shadow-lg rounded-md p-2 space-y-2 z-[60]">
                                                    <li className="hover:bg-gray-100 p-2 rounded">
                                                        <a href="#" className="block text-[12px]">Dashboard</a>
                                                    </li>
                                                    <li className="hover:bg-gray-100 p-2 rounded">
                                                        <a href="#" className="block text-[12px]">Recommendations</a>
                                                    </li>
                                                </ul>
                                            </li>

                                            {/* Projects Menu */}
                                            <li className="relative group hover:bg-gray-100 p-2 rounded flex items-center justify-between">
                                                <a href="#" className="block text-[15px]">Solutions</a>
                                                <img width={18} height={18} src={ArrowRight} alt="ArrowRight" />

                                                {/* Submenu */}
                                                <ul className="absolute w-[200px] left-full top-0 hidden group-hover:block bg-white shadow-lg rounded-md p-2 space-y-2 z-[999]">
                                                    <li className="hover:bg-gray-100 p-2 rounded">
                                                        <a href="#" className="block text-[12px]">All products</a>
                                                    </li>
                                                    <li className="hover:bg-gray-100 p-2 rounded">
                                                        <a href="#" className="block text-[12px]">Jump Start Solutions</a>
                                                    </li>

                                                    <li className="hover:bg-gray-100 p-2 rounded">
                                                        <a href="#" className="block text-[12px]">Solution deployments</a>
                                                    </li>
                                                </ul>
                                            </li>

                                            {/* Settings Menu */}
                                            {/* <li className="relative group hover:bg-gray-100 p-2 rounded flex items-center justify-between">
                                                <a href="#" className="block text-[15px]">Settings</a>
                                                <img width={18} height={18} src={ArrowRight} alt="ArrowRight" />

                                             
                                                <ul className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg rounded-md p-2 space-y-2">
                                                    <li className="hover:bg-gray-100 p-2 rounded">
                                                        <a href="#" className="block">Profile</a>
                                                    </li>
                                                    <li className="hover:bg-gray-100 p-2 rounded">
                                                        <a href="#" className="block">Preferences</a>
                                                    </li>
                                                </ul>
                                            </li> */}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
            
            <div className="flex items-center gap-[20px]">
                <div className="flex items-center justify-center gap-[10px] cursor-pointer border-[#80868b] border-[1px] rounded-[8px] px-[12px] py-[8px] max-w-[180px] w-full">
                    <span className="text-[#101828] text-[15px]">Select a project</span>
                    <img width={16} height={16} src={Arrowdown} alt="Arrowdown" />
                </div>
                
                <div className="flex items-center w-[679px] h-[40px] border-[1px] border-[#80868b] rounded-[8px]">
                    <input
                        type="text"
                        placeholder="Search (/) for resources, docs, products, and more"
                        className="flex-grow bg-transparent px-4 focus:outline-none text-[#101828] placeholder-[#7B91B0] placeholder:text-[15px]"
                    />
                    <div className="flex items-center gap-2 px-4 h-full border-l border-l-[#80868b]">
                        <img width={20} height={20} src={SearchIcon} alt="SearchIcon" />
                        <span className="text-[15px] font-semibold text-[#3367d6]">Search</span>
                    </div>
                </div>
            </div>
            
            <div className="relative flex items-center gap-[20px]">
                {iconConfigs.map(({icon, alt, content}) => (
                    <div key={alt} className="relative">
                        <div 
                            className="cursor-pointer"
                            onClick={() => toggleDropdown(alt)}
                        >
                            <img width={20} height={20} src={icon} alt={alt} />
                        </div>
                        {activeDropdown === alt && (
                            <div className="absolute top-full mt-2 right-0 z-50">
                                {content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    const renderMobileHeader = () => (
        <div className='md:hidden'>
            <div className='flex items-center justify-between px-4 py-3'>
                <div className="flex items-center gap-[10px]">
                    <img 
                        width={24} 
                        height={24} 
                        src={HamburgerMenu} 
                        alt="HamburgerMenu" 
                        onClick={toggleMobileMenu}
                    />
                    <h1 className="text-[18px] font-medium text-[#707070]">Console</h1>
                </div>
                
                <div className="flex items-center gap-[15px]">
                    <img 
                        width={20} 
                        height={20} 
                        src={SearchIcon} 
                        alt="SearchIcon" 
                        onClick={toggleSearch}
                    />
                    <div className="relative flex items-center gap-[10px]">
                        {iconConfigs.slice(0, 3).map(({icon, alt, content}) => (
                            <div key={alt} className="relative">
                                <img 
                                    width={20} 
                                    height={20} 
                                    src={icon} 
                                    alt={alt} 
                                    onClick={() => toggleDropdown(alt)}
                                />
                                {activeDropdown === alt && (
                                    <div className="absolute top-full mt-2 right-0 z-50">
                                        {content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {isSearchVisible && (
                <div className="px-4 pb-3">
                    <div className="flex items-center w-full h-[40px] border-[1px] border-[#80868b] rounded-[8px]">
                        <input
                            type="text"
                            placeholder="Search resources, docs, products"
                            className="flex-grow bg-transparent px-4 focus:outline-none text-[#101828] placeholder-[#7B91B0] placeholder:text-[14px]"
                        />
                        <div className="px-4" onClick={toggleSearch}>
                            {/* <img width={20} height={20} src={CloseIcon} alt="Close" /> */}
                        </div>
                    </div>
                </div>
            )}

            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
                    <div className="flex justify-between items-center p-4 border-b">
                        <h1 className="text-[18px] font-medium text-[#707070]">Console</h1>
                        <img 
                            width={24} 
                            height={24} 
                            src={CloseIcon} 
                            alt="Close" 
                            onClick={toggleMobileMenu}
                        />
                    </div>
                    <div className="p-4 space-y-4">
                        <div className="flex items-center justify-between cursor-pointer border-[#80868b] border-[1px] rounded-[8px] px-[12px] py-[8px]">
                            <span className="text-[#101828] text-[15px]">Select a project</span>
                            <img width={16} height={16} src={Arrowdown} alt="Arrowdown" />
                        </div>
                        
                        {iconConfigs.map(({icon, alt, content}) => (
                            <div key={alt} className="border-b pb-4">
                                <div 
                                    className="flex items-center justify-between cursor-pointer"
                                    onClick={() => toggleDropdown(alt)}
                                >
                                    <div className="flex items-center gap-3">
                                        <img width={20} height={20} src={icon} alt={alt} />
                                        <span>{alt}</span>
                                    </div>
                                    <img width={16} height={16} src={Arrowdown} alt="Dropdown" />
                                </div>
                                {activeDropdown === alt && (
                                    <div className="mt-2">
                                        {content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <header className="bg-white border-b">
            {renderDesktopHeader()}
            {renderMobileHeader()}
        </header>
    );
};

export default Header;