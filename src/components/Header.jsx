import React, { useState, useEffect } from 'react';
import HamburgerMenu from "../assets/HamburgerMenu.svg";
import Arrowdown from "../assets/Arrowdown.svg";
import SearchIcon from "../assets/SearchIcon.svg";

import CrossLarge from "../assets/CrossLarge.svg";
import ArrowRight from "../assets/ArrowRight.svg";
import { motion, AnimatePresence } from 'framer-motion';

import sectionsNavigation from "../data/sectionsnavigation.js";
import { iconConfigs } from '../utils/icons.jsx';

const sections = Object.values(sectionsNavigation.sections).map(
    (section) => section.name
);


const submenuItems = sectionsNavigation.sections.allProducts.submenu || [];


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [selectedProject, setSelectedProject] = useState("Select a project");

    
  const handleSelectProject = (project) => {
    setSelectedProject(project); // Update the selected project
    setIsOpen(false); // Close the dropdown after selection
  };

    const toggleProjectDropdown = () => {
        setIsOpen((prevState) => !prevState);
    };

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
        hidden: { x: '-100%' },
        visible: { x: 0 }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 0.5 }
    };

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);


    const toggleDropdown = (alt) => setActiveDropdown(activeDropdown === alt ? null : alt);


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsSearchVisible(false);
    };
    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
        setIsMobileMenuOpen(false);
    };

    const renderDesktopHeader = () => (
        <div className='hidden md:flex items-center justify-between px-6 py-[5px]'>
            <div className="flex items-center gap-[20px] cursor-pointer" onClick={toggleSidebar}>
                <img width={24} height={24} src={HamburgerMenu} alt="HamburgerMenu" />
                <h1 className="text-[20px] leading-[39px] font-medium text-[#707070]">Console</h1>
            </div>

            <AnimatePresence>
                {isSidebarOpen && (
                    <>
                        <motion.div 
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={overlayVariants}
                            className="fixed inset-0 bg-black z-40"
                            onClick={toggleSidebar}
                        />
                        <motion.div 
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={sidebarVariants}
                            className="fixed top-0 left-0 w-[300px] h-full bg-white z-50 shadow-lg"
                        >
                            <div className="p-2 px-8">
                                <div className="flex gap-10 items-center border-b pb-2">
                                    <button onClick={toggleSidebar} className="text-gray-600 hover:text-gray-900">
                                        <img width={18} height={18} src={CrossLarge} alt="CrossLarge" />
                                    </button>
                                    <h2 className="text-[20px] leading-[39px] font-medium text-[#707070]">Console</h2>
                                </div>
                                <nav className="mt-4">
                                    <ul className="space-y-2">
                                        <li className="relative group hover:bg-gray-100 p-2 rounded flex items-center justify-between">
                                            <a href="#" className="block text-[15px]">Cloud Overview</a>
                                            <img width={18} height={18} src={ArrowRight} alt="ArrowRight" />
                                            <ul className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg rounded-md p-2 space-y-2">
                                                {submenuItems.map((item) => (
                                                    <li 
                                                    key={item.name} 
                                                    className="hover:bg-gray-100 p-2 rounded"
                                                    >
                                                    <a 
                                                        href={item.link || "#"} 
                                                        className="block text-[12px]"
                                                    >
                                                        {item.name}
                                                    </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li className="relative group hover:bg-gray-100 p-2 rounded flex items-center justify-between">
                                            <a href="#" className="block text-[15px]">Solutions</a>
                                            <img width={18} height={18} src={ArrowRight} alt="ArrowRight" />
                                            <ul className="absolute w-[200px] left-full top-0 hidden group-hover:block bg-white shadow-lg rounded-md p-2 space-y-2">
                                                {sections.map((section) => (
                                                    <li 
                                                    key={section}
                                                    className="hover:bg-gray-100 p-2 rounded"
                                                    >
                                                    <a 
                                                        href="" 
                                                        className="block text-[12px]"
                                                    >
                                                        {section}
                                                    </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <div className="flex items-center gap-[20px]">
                <div className="relative">
                    <div
                        className="flex items-center justify-center gap-[10px] cursor-pointer border-[#80868b] border-[1px] rounded-[8px] px-[12px] py-[8px] max-w-[180px] w-full"
                        onClick={toggleProjectDropdown}
                    >
                        <span className="text-[#101828] text-[15px]">{selectedProject}</span>
                        <img
                        width={16}
                        height={16}
                        src={Arrowdown}
                        alt="Arrowdown"
                        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}  
                        />
                    </div>

                    {isOpen && (
                        <div className="absolute top-full left-0 mt-[8px] bg-white border border-[#80868b] rounded-[8px] shadow-md w-full max-w-[180px]">
                        <ul className="space-y-[8px] p-[8px]">
                            <li
                            className="cursor-pointer text-[#101828] text-[14px] hover:bg-gray-100 px-[12px] py-[6px] rounded-[6px]"
                            onClick={() => handleSelectProject("Project 1")}
                            >
                            Project 1
                            </li>
                            <li
                            className="cursor-pointer text-[#101828] text-[14px] hover:bg-gray-100 px-[12px] py-[6px] rounded-[6px]"
                            onClick={() => handleSelectProject("Project 2")}
                            >
                            Project 2
                            </li>
                            <li
                            className="cursor-pointer text-[#101828] text-[14px] hover:bg-gray-100 px-[12px] py-[6px] rounded-[6px]"
                            onClick={() => handleSelectProject("Project 3")}
                            >
                            Project 3
                            </li>
                        </ul>
                        </div>
                    )}
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
                {iconConfigs.map(({ icon, alt, content }) => (
                    <div key={alt} className="relative">
                        <div className="cursor-pointer" onClick={() => toggleDropdown(alt)}>
                            <img width={20} height={20} src={icon} alt={alt} />
                        </div>
                        {activeDropdown === alt && <div className="absolute top-full mt-2 right-0 z-50">{content}</div>}
                    </div>
                ))}
            </div>
        </div>
    );

    const renderMobileHeader = () => (
        <div className='md:hidden'>
            <div className='flex items-center justify-between px-4 py-3'>
                <div className="flex items-center gap-[10px]">
                    <img width={24} height={24} src={HamburgerMenu} alt="HamburgerMenu" onClick={toggleMobileMenu} />
                    <h1 className="text-[18px] font-medium text-[#707070]">Console</h1>
                </div>
                <div className="flex items-center gap-[15px]">
                    <img width={20} height={20} src={SearchIcon} alt="SearchIcon" onClick={toggleSearch} />
                    <div className="relative flex items-center gap-[10px]">
                        {iconConfigs.slice(1, 2).map(({ icon, alt, mobileContent }) => (
                            <div key={alt} className="relative">
                            {/* Desktop Icon */}
                            <img
                                width={20}
                                height={20}
                                src={icon}
                                alt={alt}
                                onClick={() => toggleDropdown(alt)}
                                className="hidden sm:block cursor-pointer"
                            />

                            
                            {/* Mobile Avatar */}
                            <div
                                className="sm:hidden flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full cursor-pointer"
                                onClick={() => toggleDropdown(alt)}
                            >
                                <span className="text-sm font-bold text-gray-700">P</span>
                            </div>

                            {/* Dropdown Content */}
                            {activeDropdown === alt && (
                                <div className="absolute top-full mt-2 right-0 z-50">
                                <div className="bg-white w-[250px] h-[500px] shadow-md p-4 overflow-y-auto">
                                    {mobileContent.map((section, index) => (
                                        <div
                                            key={index}
                                            className={`
                                            ${section.type === "info" ? "border-b pb-[10px] border-t pt-[10px]" : ""}
                                            ${section.type === "section" ? "border-b pb-[10px] pt-[10px]" : ""}
                                            ${section.items ? "space-y-[10px] text-start" : ""}
                                            `}
                                        >

                                            
                                            {section.title && (
                                                <h1
                                                    className={`
                                                    ${section.type === "section" ? "text-[15px] text-start font-semibold" : "text-[15px]"}
                                                    ${section.type === "info" ? "text-[15px]" : ""}
                                                    `}
                                                >
                                                    {section.title}
                                                </h1>
                                            )}


                                            {section.subtitle && (
                                                <p className="text-[12px]">{section.subtitle}</p>
                                            )}


                                            {section.items &&
                                            section.items.map((item, itemIndex) => (
                                                <h1
                                                key={itemIndex}
                                                className="cursor-pointer text-[15px] hover:bg-gray-200 p-[5px] rounded-[8px]"
                                                >
                                                    {item.label}
                                                </h1>
                                            ))}
                                        </div>
                                    ))}
                                </div>
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
                    </div>
                </div>
            )}

            {isMobileMenuOpen && (
                
                <>
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={overlayVariants}
                    className="fixed inset-0 bg-black z-40"
                    onClick={toggleSidebar}
                />
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={sidebarVariants}
                    className="fixed top-0 left-0 w-[300px] h-full bg-white z-50 shadow-lg"
                >
                    <div className="p-2 px-8">
                        <div className="flex gap-10 items-center border-b pb-2">
                            <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-gray-900">
                                <img width={18} height={18} src={CrossLarge} alt="CrossLarge" />
                            </button>
                            <h2 className="text-[20px] leading-[39px] font-medium text-[#707070]">Console</h2>
                        </div>
                        <nav className="mt-4">
                            <ul className="space-y-2">
                                <li className="relative group hover:bg-gray-100 p-2 rounded flex items-center justify-between">
                                    <a href="#" className="block text-[15px]">Cloud Overview</a>
                                    <img width={18} height={18} src={ArrowRight} alt="ArrowRight" />
                                    <ul className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg rounded-md p-2 space-y-2">
                                        {submenuItems.map((item) => (
                                            <li 
                                            key={item.name} 
                                            className="hover:bg-gray-100 p-2 rounded"
                                            >
                                            <a 
                                                href={item.link || "#"} 
                                                className="block text-[12px]"
                                            >
                                                {item.name}
                                            </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="relative group hover:bg-gray-100 p-2 rounded flex items-center justify-between">
                                    <a href="#" className="block text-[15px]">Solutions</a>
                                    <img width={18} height={18} src={ArrowRight} alt="ArrowRight" />
                                    <ul className="absolute w-[200px] left-full top-0 hidden group-hover:block bg-white shadow-lg rounded-md p-2 space-y-2">
                                        {sections.map((section) => (
                                            <li 
                                            key={section}
                                            className="hover:bg-gray-100 p-2 rounded"
                                            >
                                            <a 
                                                href="" 
                                                className="block text-[12px]"
                                            >
                                                {section}
                                            </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </motion.div>
                
            </>     
            )}
        </div>
    );

    return (
        <>
            {windowWidth >= 768 ? renderDesktopHeader() : renderMobileHeader()}
        </>
    );
};

export default Header;
