import React, { useState } from 'react';

import Pin from "../assets/pin.svg"
import Docs from "../assets/Docs.svg"
import DownArrow from "../assets/DownArrow.svg"

const AllProductsContent = () => {
    const [expandedComputeItems, setExpandedComputeItems] = useState({
        'Compute Engine': false,
        'Kubernetes Engine': false,
        'App Engine': false
    });

    const toggleExpandCompute = (key) => {
        setExpandedComputeItems(prev => ({
          ...prev,
          [key]: !prev[key]
        }));
    };
    
    const dropdownComputeItems = [
        {
            name: 'Compute Engine',
            description: 'Scalable virtual machines',
            expandedText: 'Flexible and customizable VM instances for your workloads'
        },
        {
            name: 'Kubernetes Engine',
            description: 'Managed Kubernetes platform',
            expandedText: 'Automated container orchestration and management'
        },
        {
            name: 'App Engine',
            description: 'Serverless application platform',
            expandedText: 'Build and deploy applications without managing infrastructure'
        }
    ];

    const [expandedItems, setExpandedItems] = useState({
        'APIS & Services': false,
        'Cloud Storage': false,
        'Compute Engine': false
    });
    
    const toggleExpand = (key) => {
        setExpandedItems(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };
    
    const dropdownItems = [
        {
            name: 'APIS & Services',
            description: 'API management for cloud services',
            expandedText: 'Automate your workflows by using your favorite languages'
        },
        {
            name: 'Google Auth Platform',
            description: 'OAuth configuration and credential',
            expandedText: 'Configure your applications identity and manage credentials for calling APIs including Sign in with Google'
        },
        {
            name: 'Billing',
            description: 'Assortment of billing and cost management tools',
            expandedText: 'Scale your business confidently with billing tools that ensure visibility, accountability, and cost control'
        },
        {
            name: 'IAM & Admin',
            description: 'Resource access control',
            expandedText: 'Establish fine-grained identity and access management for Google Cloud resources'
        },
        {
            name: 'Google Cloud Setup',
            description: 'Set up and deploy a best-practice foundation',
            expandedText: 'Set your organization up for success by deploying a foundation that defaults to best practices. Customizable and integrated with Terraform.'
        },
        {
            name: 'Admin for Gemini',
            description: 'Purchase and manage subscriptions in Google Cloud',
            expandedText: 'High-performance VMs for your cloud infrastructure'
        },
    ];

    return (
        <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                <div className="flex-grow">
                    <h1 className="text-2xl md:text-3xl text-black  mb-2">All products</h1>
                    <p className="text-base text-black/90 max-w-full md:max-w-[509px]">
                        Explore products from Google Cloud and recommended partners at a glance
                    </p>
                </div>

                <div className="w-full md:w-auto bg-[#fafafa] p-4 rounded-lg">
                    <h2 className="text-base font-medium text-black/90 mb-4">
                        Find and deploy over 4,500 products in Marketplace
                    </h2>

                    <div className="flex items-center gap-4">
                        <span 
                            className="text-[#3367d6] cursor-pointer text-sm font-semibold 
                            hover:bg-gray-200 px-3 py-2 rounded-lg transition-all duration-200"
                        >
                            VISIT MARKETPLACE
                        </span>
                        <img 
                            width={20} 
                            height={20} 
                            src={Pin} 
                            alt="Pin" 
                            className="w-5 h-5"
                        />
                    </div>
                </div>
            </div>

            {/* Management Section */}
            <div className="mb-12">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                        <h2 className="text-lg text-black mb-2">Management</h2>
                        <p className="text-base text-black/65 max-w-[240px]">
                            Control costs, establish identity and access management, and use APIs
                        </p>
                    </div>

                    <div className="flex-grow">
                        <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 mb-2">
                            <div className="flex-1 text-xs">Name</div>
                            <div className="flex-1 text-xs">Description</div>
                        </div>

                        {dropdownItems.map((item) => (
                            <div 
                                key={item.name} 
                                className={`border-b transition-all duration-300 
                                    ${expandedItems[item.name] ? 'h-32' : 'h-16'} 
                                    overflow-hidden`}
                            >
                                <div 
                                    className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                                    onClick={() => toggleExpand(item.name)}
                                >
                                    <div className="flex items-center gap-3">
                                        <img 
                                            width={18} 
                                            height={18} 
                                            src={Pin} 
                                            alt="Pin" 
                                            className="w-4 h-4"
                                        />
                                        <h3 className="text-sm text-[#3367d6] underline">{item.name}</h3>
                                    </div>
                                
                                    <div className="hidden md:block relative flex-grow mx-4">
                                        <h4 className="text-sm text-black/70">{item.description}</h4>
                                        {expandedItems[item.name] && (
                                            <p className="text-sm text-black/70 mt-2">
                                                {item.expandedText}
                                            </p>
                                        )}
                                    </div>
                                
                                    <div className="flex items-center gap-4">
                                        <img 
                                            width={18} 
                                            height={18} 
                                            src={Docs} 
                                            alt="Docs" 
                                            className="w-4 h-4"
                                        />
                                        <img 
                                            width={18} 
                                            height={18} 
                                            src={DownArrow} 
                                            alt="DownArrow" 
                                            className={`w-4 h-4 transition-transform duration-300 
                                                ${expandedItems[item.name] ? 'rotate-180' : ''}`} 
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Compute Section */}
            <div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                        <h2 className="text-lg text-black mb-2">Compute</h2>
                        <p className="text-base text-black/65 max-w-[240px]">
                            Run scalable virtual machines and containers
                        </p>
                    </div>

                    <div className="flex-grow">
                        <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 mb-2">
                            <div className="flex-1 text-xs">Name</div>
                            <div className="flex-1 text-xs">Description</div>
                        </div>

                        {dropdownComputeItems.map((item) => (
                            <div
                                key={item.name}
                                className={`border-b transition-all duration-300 
                                    ${expandedComputeItems[item.name] ? 'h-32' : 'h-16'} 
                                    overflow-hidden`}
                            >
                                <div
                                    className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                                    onClick={() => toggleExpandCompute(item.name)}
                                >
                                    <div className="flex items-center gap-3">
                                        <img 
                                            width={18} 
                                            height={18} 
                                            src={Pin} 
                                            alt="Pin" 
                                            className="w-4 h-4"
                                        />
                                        <h3 className="text-sm text-[#3367d6] underline">{item.name}</h3>
                                    </div>

                                    <div className="hidden md:block relative flex-grow mx-4">
                                        <h4 className="text-sm text-black/70">{item.description}</h4>
                                        {expandedComputeItems[item.name] && (
                                            <p className="text-sm text-black/70 mt-2">
                                                {item.expandedText}
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <img 
                                            width={18} 
                                            height={18} 
                                            src={Docs} 
                                            alt="Docs" 
                                            className="w-4 h-4"
                                        />
                                        <img
                                            width={18}
                                            height={18}
                                            src={DownArrow}
                                            alt="DownArrow"
                                            className={`w-4 h-4 transition-transform duration-300 
                                                ${expandedComputeItems[item.name] ? 'rotate-180' : ''}`}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProductsContent;