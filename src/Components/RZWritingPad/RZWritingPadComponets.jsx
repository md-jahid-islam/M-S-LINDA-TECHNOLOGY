import React, { useState } from 'react';
import { Printer } from 'lucide-react';

 // Used for primary branding color
const SELLER_DATA_PAD = {
    name: "RZ Packaging Ltd.",
    logoText: "RZ ",
    logoColor: "red-700",
    slogan: "ALL KINDS OF GARMENTS ACCESSORIES MANUFACTURER AND IMPORTER",
    address: "Head Office: House #6 (Level-4), Road #10, Sector #66, Uttara, Dhaka-1230 | Factory: 7A/2, Dhorpara Road, Ward No-51, Shatalish, Tongi, Gazipur.",
    contact: "01614-959595, 01821-385320, 01702-246036, 01998-589117",
    website: "www.lindatechnologybd.com",
    email: "symoom@lindatechnologybd.com, morzaharif.accessories@gmail.com",
};

const RZWritingPadComponets = () => {
    const { name, logoText, logoColor, slogan, address, contact, website, email } = SELLER_DATA_PAD;
    const [documentContent, setDocumentContent] = useState("Type your official letter, memo, or notes here. This area is fully editable.\n\n\n\n[Start typing from here...]\n\n\n\n\n\n\n\n\n");

    // Handler for triggering the browser's print dialog
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-gray-100 min-h-screen font-sans">
            <style>{`
                /* Styling for print mode */
                @media print {
                    .no-print {
                        display: none !important;
                    }
                    .writing-area {
                        border: none !important;
                        resize: none !important;
                        padding: 0 !important;
                        box-shadow: none !important;
                        min-height: 80vh !important;
                        color: black;
                        font-family: inherit;
                        line-height: 1.5;
                        font-size: 11pt;
                    }
                    .pad-container {
                        box-shadow: none !important;
                        border: none !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        border-radius: 0 !important;
                        min-width: 100%;
                    }
                    body {
                        background-color: white !important;
                    }
                }
            `}</style>

            <div className="max-w-4xl mx-auto bg-white border border-gray-300 shadow-xl rounded-xl overflow-hidden pad-container">
                
                {/* 🔵 Print Button */}
                <div className="flex justify-end p-4 sm:p-6 pb-0 no-print">
                    <button
                        onClick={handlePrint}
                        className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                    >
                        <Printer className="w-5 h-5" />
                        <span className="text-lg">Print / Download PDF</span>
                    </button>
                </div>

                {/* 🔴 Header Section (Letterhead) */}
                <header className="p-6">
                    <div className="flex items-start justify-start space-x-4">
                        {/* Logo/Icon Area */}
                        <div className="flex-shrink-0 flex flex-col items-center justify-center pt-2">
                            <div className="flex-shrink-0">
                       <img src="/images/rzlogocreate.png" alt="logo" className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-red-500 shadow-md"/>
                       </div>
                        </div>
                        
                        {/* Company Info */}
                        <div className="flex-grow">
                            <h1 className={`text-3xl font-bold text-${logoColor} leading-tight`}>{name}</h1>
                            <p className="text-sm text-gray-800 font-medium mt-1 uppercase tracking-wide">{slogan}</p>
                            
                            <div className="border-b border-gray-400 my-3"></div>
                            
                            <p className="text-[10px] text-gray-600 leading-tight">
                                {address}
                            </p>
                            <p className="text-[10px] text-gray-600 leading-tight">
                                Contact: {contact}
                            </p>
                            <p className="text-[10px] text-gray-600 leading-tight">
                                E-mail: <span className="text-blue-600">{email}</span>
                            </p>
                            <p className="text-xs font-semibold text-blue-800 mt-1">
                                Website: <a href={`http://${website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{website}</a>
                            </p>
                            
                        </div>
                    </div>
                    {/* Horizontal Line separating header from body, matching the rzpad image */}
                    <div className="border-t border-gray-800 mt-4"></div>
                </header>

                {/* 📝 Main Writing Area */}
                <div className="p-6 pt-2">
                    <textarea
                        value={documentContent}
                        onChange={(e) => setDocumentContent(e.target.value)}
                        className="writing-area w-full p-4 border border-dashed border-gray-300 focus:border-blue-500 focus:ring-0 outline-none transition-colors duration-150 rounded-lg text-base leading-relaxed resize-y"
                        rows="30" // Give plenty of vertical space
                        placeholder="Start writing your document here..."
                        style={{ minHeight: '600px' }} // Minimum height for better visual representation
                    />
                </div>

                {/* 🔴 Footer Section (Decoration) */}
                <div className="relative h-6">
                    <div className={`absolute bottom-0 left-0 w-full h-4 bg-${logoColor} opacity-90`}></div>
                    {/* Example of diagonal hatch lines like in the image */}
                    <div className="absolute bottom-0 right-0 w-20 h-6 overflow-hidden">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <pattern id="hatches" patternUnits="userSpaceOnUse" width="10" height="10">
                                    <path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="#fff" strokeWidth="1"/>
                                </pattern>
                            </defs>
                            <rect width="100" height="100" fill="url(#hatches)"/>
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RZWritingPadComponets;