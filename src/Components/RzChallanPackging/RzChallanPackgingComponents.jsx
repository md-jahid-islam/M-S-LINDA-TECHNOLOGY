import React, { useState, useMemo } from 'react';
import { Plus, Trash2, Box, Info, Calendar, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

 // ===========Used for primary branding color ============= //
 const SELLER_DATA_CHALLAN = {
    name: "RZ Packaging Ltd.",
    logoText: "RZ",
    logoColor: "gray-600", 
    slogan: "ALL KINDS OF GARMENTS ACCESSORIES MANUFACTURER AND IMPORTER",
    address: "Head Office: House #16 (Level-4), Road #10, Sector #06, Uttara, Dhaka-1230 | Factory Address: 7A/2, Dhorpara Road, Ward No-51, Shatalish, Tongi, Gazipur.",
    contact: "01614-959595, 01821-385320, 01702-246036, 01998-589117",
    website: "www.lindatechnologybd.com",
    email: "symoom@lindatechnologybd.com, msrahatzarifaccessories@gmail.com",
    docType: "CHALLAN",
 };

 // ============ Initial state for a single item rown ============ //
 const initialItem = {
    id: crypto.randomUUID(),
    description: '',
    size: '',
    quantityRoll: '',
    quantityKG: '',
 };

 const RzChallanPackgingComponents = () => {
    const { name, logoText, logoColor, slogan, address, contact, website, email, docType } = SELLER_DATA_CHALLAN;

    // ========= State for all dynamic challan information =========== //
    const [items, setItems] = useState(Array(8).fill(null).map(() => ({ ...initialItem, id: crypto.randomUUID() })));
    const [challanInfo, setChallanInfo] = useState({
        companyName: '',
        address: '',
        challanNo: '',
        date: new Date().toISOString().substring(0, 10),
        contactPerson: '',
        mobile: '',
        poNo: '',
        totalInWord: '',
        receivedBy: '',
        checkedBy: '',
        authorizedBy: '',
    });

    // =========== Handler for general challan information fields ============ // 
    const handleChallanInfoChange = (e) => {
        const { name, value } = e.target;
        setChallanInfo(prev => ({ ...prev, [name]: value }));
    };

    // ============== Handler for changing values in the item table =============== // 
    const handleItemChange = (id, field, value) => {
        setItems(prevItems => {
            const newItems = prevItems.map(item => {
                if (item.id === id) {
                    return { ...item, [field]: value };
                }
                return item;
            });
            return newItems;
        });
    };

    // ========== Function to add a new item row =========== //
    const addItemRow = () => {
        setItems(prevItems => [...prevItems, { ...initialItem, id: crypto.randomUUID() }]);
    };

    // =========== Function to remove an item row ============= //
    const removeItemRow = (id) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    // ============= Handler for triggering the browser's print dialog ============ //
    const handlePrint = () => {
        window.print();
    };

    // ========== Helper component for customer info input fields ============= //
    const InfoField = ({ label, name, value, onChange, placeholder = "", type = "text", className = " text-gray-600 " }) => (
        <div className={`flex flex-col sm:flex-row items-start sm:items-center py-1 ${className}`}>
            <label htmlFor={name} className="w-full sm:w-1/4 font-medium text-gray-700 text-xs sm:text-sm whitespace-nowrap mb-1 sm:mb-0">
            {label}
            </label>
            <input id={name} name={name} type={type} value={value}onChange={onChange} placeholder={placeholder} className={`flex-grow py-1 px-2 border-b border-gray-400 focus:border-red-500 focus:ring-0 outline-none transition-colors duration-150 rounded-sm text-sm print-input`}required/>
        </div>
    );

    return (
        <>
        <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen font-sans">
            <style>{`
                /* Styling for print mode to hide interactive elements and borders */
                @media print {
                    .no-print {
                        display: none !important;
                    }
                    .print-input, .print-signature-input, input:not([type="date"]) {
                        border: none !important;
                        padding: 0 !important;
                        box-shadow: none !important;
                        background-color: transparent !important;
                    }
                    .print-signature-input {
                        border-top: 1px solid black !important;
                    }
                    .pad-container {
                        box-shadow: none !important;
                        border: none !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        border-radius: 0 !important;
                        min-width: 100%;
                    }
                    .challan-table td {
                        border-color: #000 !important; /* Ensure table borders are visible */
                    }
                    body {
                        background-color: white !important;
                    }
                }
            `}</style>
           <div>
            <button>
              <Link className='px-4 py-2 text-white rounded-lg bg-blue-600 hover:bg-green-400' target='blank' to={"/RZBillPackgin"}>M/S Rz Back to Bill Packagin Ltd.</Link>
            </button>
           </div>
            <div className="max-w-4xl mx-auto bg-white border border-gray-300 shadow-xl rounded-xl overflow-hidden pad-container">
                
                {/* 🔵 Print Button */}
                <div className="flex justify-end p-4 sm:p-6 pb-0 no-print">
                    <button onClick={handlePrint} className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200">
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
                       <img src="/images/Packaging.png.png" alt="logo" className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-red-500 shadow-md"/>
                       </div>
                        </div>
                        
                        {/* Company Info */}
                        <div className="flex-grow">
                            <h1 className={`text-3xl font-bold text-${logoColor} leading-tight`}>{name}</h1>
                            <p className="text-sm text-gray-800 font-medium mt-1 uppercase tracking-wide">{slogan}</p>
                            
                            <p className="text-[10px] text-gray-600 leading-tight mt-2">
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
                    {/* Horizontal Line separating header from body, matching the RZCHALLAN image */}
                    <div className="border-t border-gray-800 mt-4"></div>
                </header>

                {/* 🔵 Document Type Label */}
                <div className="text-center py-2">
                    <span className={`text-[#600] font-black text-lg uppercase tracking-widest bg-${logoColor} px-4 py-1 rounded-md shadow-md`}>{docType}</span>
                </div>

                {/* 🔵 Customer Details Input Section */}
                <div className="p-6 pt-2 space-y-2 text-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InfoField label="Company Name:" name="companyName"value={challanInfo.companyName}onChange={handleChallanInfoChange}className="pr-4"/>
                        <div className="flex items-center space-x-4">
                        <InfoField label="Challan No." name="challanNo" value={challanInfo.challanNo} onChange={handleChallanInfoChange} className="w-1/2"/>
                        <InfoField label="Date" name="date" value={challanInfo.date} onChange={handleChallanInfoChange} type="date"className="w-1/2"/>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1">
                    <InfoField label="Address" name="address" value={challanInfo.address} onChange={handleChallanInfoChange}/>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InfoField label="Contact Person" name="contactPerson" value={challanInfo.contactPerson} onChange={handleChallanInfoChange} className="pr-4"/>
                        <InfoField label="Mobile" name="mobile" value={challanInfo.mobile}onChange={handleChallanInfoChange} type="tel"/>
                    </div>
                    
                    <div className="grid grid-cols-1">
                    <InfoField label="P.O. No." name="poNo"value={challanInfo.poNo}onChange={handleChallanInfoChange}/>
                    </div>
                </div>

                {/* 📦 Item Table Section */}
                <div className="p-6 pt-2">
                    <h3 className="font-bold text-gray-800 flex items-center mb-3 text-lg"><Box className="w-5 h-5 mr-2" /> Goods Delivered</h3>
                    <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-400">
                        <table className="min-w-full border-collapse text-sm challan-table">
                            <thead className={`bg-gray-200 text-gray-800 font-semibold border-b border-gray-400`}>
                                <tr>
                                    <th className="p-3 w-[5%] border-r border-gray-400">Sl. No.</th>
                                    <th className="p-3 w-[35%] text-left border-r border-gray-400">Description</th>
                                    <th className="p-3 w-[15%] border-r border-gray-400">Size</th>
                                    <th className="p-3 w-[15%] border-r border-gray-400">Quantity (Roll/Pcs)</th>
                                    <th className="p-3 w-[15%] border-r border-gray-400">Quantity (KG)</th>
                                    <th className="p-3 w-[15%] no-print">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={item.id} className="h-10 border-b border-gray-300 hover:bg-red-50 transition duration-150">
                                        {/* Sl.No. */}
                                        <td className="p-2 text-center font-medium border-r border-gray-400 bg-gray-50">{index + 1}</td>
                                        
                                        {/* Description */}
                                        <td className="p-0 border-r border-gray-400">
                                        <input type="text" value={item.description} onChange={(e) => handleItemChange(item.id, 'description', e.target.value)} placeholder="Item description"className="w-full h-full p-2 border-none focus:ring-0 focus:outline-none bg-transparent print-input"/>
                                        </td>
                                        
                                        {/* Size */}
                                        <td className="p-0 border-r border-gray-400">
                                        <input type="text" value={item.size} onChange={(e) => handleItemChange(item.id, 'size', e.target.value)}placeholder="e.g., L/XL"className="w-full h-full p-2 text-center border-none focus:ring-0 focus:outline-none bg-transparent print-input"/>
                                        </td>
                                        
                                        {/* Qty Roll/Pcs */}
                                        <td className="p-0 border-r border-gray-400">
                                        <input type="text"value={item.quantityRoll} onChange={(e) => handleItemChange(item.id, 'quantityRoll', e.target.value)} placeholder="0"className="w-full h-full p-2 text-right border-none focus:ring-0 focus:outline-none print-input"/>
                                        </td>
                                        
                                        {/* Qty KG */}
                                        <td className="p-0 border-r border-gray-400">
                                        <input type="text"value={item.quantityKG}onChange={(e) => handleItemChange(item.id, 'quantityKG', e.target.value)} placeholder="0.00"className="w-full h-full p-2 text-right border-none focus:ring-0 focus:outline-none print-input"/>
                                        </td>
                                        
                                        {/* Action */}
                                        <td className="p-2 text-center no-print">
                                            <button onClick={() => removeItemRow(item.id)} className="text-red-500 hover:text-red-700 transition duration-150 p-1 rounded-full hover:bg-red-100"aria-label="Remove item">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="bg-gray-200 font-extrabold border-t-2 border-gray-400">
                                    <td colSpan="4" className="p-3 text-right text-gray-800 border-r border-gray-400">Total</td>
                                    <td className="p-3 text-right text-lg text-red-700 border-r border-gray-400"></td> 
                                    <td className="p-2 text-center no-print">
                                        <button onClick={addItemRow} className="text-green-600 hover:text-green-800 transition duration-150 p-1 rounded-full hover:bg-green-100"aria-label="Add new item row">
                                        <Plus className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                {/* 🔵 Footer & Signature Section */}
                <div className="p-6 border-t border-gray-300">
                    <div className="text-sm mb-12">
                        <div className="flex items-start">
                        <label htmlFor="totalInWord" className="w-full sm:w-1/6 font-medium text-gray-700 whitespace-nowrap pt-1"> In Word :</label>
                        <input id="totalInWord" name="totalInWord" type="text" value={challanInfo.totalInWord} onChange={handleChallanInfoChange} placeholder="[Enter total quantity/value in words...]" className="flex-grow py-1 px-2 border-b border-dashed border-gray-400 focus:border-red-500 focus:ring-0 outline-none transition-colors duration-150 text-sm print-input"/>
                        </div>
                    </div>

                    {/* Signature Input Lines */}
                    <div className="flex justify-between items-end text-xs mt-12 pt-4">
                        {/* 1. Received By */}
                        <div className="w-[30%] text-center">
                        <input type="text" name="receivedBy" value={challanInfo.receivedBy} onChange={handleChallanInfoChange} className="w-full text-center border-t-2 border-gray-800 pt-1 text-gray-800 focus:ring-0 focus:border-red-500 outline-none placeholder-gray-400 font-medium bg-white print-signature-input" placeholder="Name/Signature"/>
                        <p className="font-bold text-gray-700 mt-1">Received By</p>
                        </div>
                        
                        {/* 2. Checked By */}
                        <div className="w-[30%] text-center">
                        <input type="text" name="checkedBy"value={challanInfo.checkedBy} onChange={handleChallanInfoChange} className="w-full text-center border-t-2 border-gray-800 pt-1 text-gray-800 focus:ring-0 focus:border-red-500 outline-none placeholder-gray-400 font-medium bg-white print-signature-input" placeholder="Name/Stamp"/>
                        <p className="font-bold text-gray-700 mt-1">Checked By</p>
                        </div>
                        
                        {/* 3. Authorized By */}
                        <div className="w-[30%] text-center">
                        <input type="text" name="authorizedBy" value={challanInfo.authorizedBy}onChange={handleChallanInfoChange} className="w-full text-center border-t-2 border-gray-800 pt-1 text-gray-800 focus:ring-0 focus:border-red-500 outline-none placeholder-gray-400 font-medium bg-white print-signature-input"placeholder="Signature/Stamp"/>
                        <p className="font-bold text-gray-700 mt-1">Authorized By</p>
                        </div>
                    </div>
                </div>

                {/* 🔴 Red Footer Bar with Hatch Pattern */}
                <div className="relative h-4">
                    <div className={`absolute bottom-0 left-0 w-full h-4 bg-${logoColor} opacity-90`}></div>
                    {/* Diagonal hatch lines like in the image */}
                    <div className="absolute bottom-0 right-0 w-20 h-4 overflow-hidden">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <pattern id="hatches" patternUnits="userSpaceOnUse" width="10" height="10">
                                <path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="#000" strokeWidth="1"/>
                                </pattern>
                            </defs>
                            <rect width="100" height="100" fill="url(#hatches)"/>
                        </svg>
                    </div>
                </div>

            </div>
        </div>     
        </>
    );
 };

 export default RzChallanPackgingComponents;