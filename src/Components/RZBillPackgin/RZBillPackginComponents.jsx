import React, { useState, useMemo } from 'react';
import { Plus, Trash2, DollarSign, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

 // ===========Primary branding color ========== // 
 const SELLER_DATA_BILL = {
    name: "RZ Packaging Ltd.",
    logoText: "RZ",
    logoColor: "red-700", 
    slogan: "ALL KINDS OF GARMENTS ACCESSORIES MANUFACTURER AND IMPORTER",
    address: "Head Office: House # 16 (Level-4), Road # 10, Sector # 06, Uttara, Dhaka-1230 | Factory Address: 7A/2, Dhorpara Road, Ward No-51, Shatalish, Tongi, Gazipur.",
    contact: "01614-959595, 01821-385320, 01302-246036, 01998-589117",
    website: "www.lindatechnologybd.com",
    email: "symoom@lindatechnologybd.com, msrahatzarifaccessories@gmail.com",
    docType: "BILL",
 };

 // ===========Initial state for a single item row ============ //
 const initialItem = {
    id: crypto.randomUUID(),
    description: '',
    quantity: 0, 
    unitPrice: 0, 
    totalPrice: 0, 
 };

 const RZBillPackginComponents = () => {
    const { name, logoText, logoColor, slogan, address, contact, website, email, docType } = SELLER_DATA_BILL;

    const [items, setItems] = useState(Array(8).fill(null).map(() => ({ ...initialItem, id: crypto.randomUUID() })));
    const [billInfo, setBillInfo] = useState({
        companyName: '',
        address: '',
        invoiceNo: '',
        date: new Date().toISOString().substring(0, 10),
        contactPerson: '',
        mobile: '',
        poNo: '',
        totalInWord: '',
    });

    // =========== Calculate Grand Total of all items =========== //
    const grandTotal = useMemo(() => {
        return items.reduce((sum, item) => sum + (item.totalPrice || 0), 0);
    }, [items]);

    // =========== Handler for general bill information fields =========== //
    const handleBillInfoChange = (e) => {
        const { name, value } = e.target;
        setBillInfo(prev => ({ ...prev, [name]: value }));
    };

    // =========== Handler for changing values in the item table and recalculating totals ============= //
    const handleItemChange = (id, field, value) => {
        setItems(prevItems => {
            const newItems = prevItems.map(item => {
                if (item.id === id) {
                    const updatedItem = { ...item, [field]: parseFloat(value) || value }; 

                    // ========= Ensure quantity and unitPrice are numbers for calculation ========== //
                    const qty = parseFloat(updatedItem.quantity) || 0;
                    const price = parseFloat(updatedItem.unitPrice) || 0;
                    
                    // =========== Calculate Total Price (Quantity * Unit Price) ============== //
                    updatedItem.totalPrice = (qty * price).toFixed(2); 
                    
                    // ============== Convert back to string if the input was empty or non-numeric for display in input fields ============== // 
                    if (field !== 'description' && value === '') { 
                     updatedItem[field] = '';
                    } else if (field !== 'description' && isNaN(parseFloat(value))) {
                        updatedItem[field] = value;
                    }
                    return updatedItem;
                }
                return item;
            });
            return newItems;
        });
    };

    // ============ Function to add a new item row =========== //
    const addItemRow = () => {
        setItems(prevItems => [...prevItems, { ...initialItem, id: crypto.randomUUID() }]);
    };

    // ========== Function to remove an item row ========== //
    const removeItemRow = (id) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    // =========== Handler for triggering the browser's print dialog ========== //
    const handlePrint = () => {
        window.print();
    };

    // ========== Helper component for customer info input fields =============== //
    const InfoField = ({ label, name, value, onChange, placeholder = "", type = "text", className = "w-full" }) => (
        <div className={`flex flex-col sm:flex-row items-start sm:items-center py-1 ${className}`}>
            <label htmlFor={name} className="w-full sm:w-1/4 font-medium text-gray-700 text-xs sm:text-sm whitespace-nowrap mb-1 sm:mb-0"> {label}</label>
            <input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} className={`flex-grow py-1 px-2 border-b border-gray-400 focus:border-red-500 focus:ring-0 outline-none transition-colors duration-150 rounded-sm text-sm print-input`}required/>
        </div>
    );

    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen font-sans">
            <style>{`
                /* Styling for print mode to hide interactive elements and borders */
                @media print {
                    .no-print {
                        display: none !important;
                    }
                    .print-input, .print-signature-input {
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
                    .bill-table td {
                        border-color: #000 !important; /* Ensure table borders are visible */
                    }
                    body {
                        background-color: white !important;
                    }
                }
            `}
            </style>
               <div>
                 <button>
                 <Link className='px-4 py-2 text-white rounded-lg bg-blue-600 hover:bg-green-400' target='blank' to={"/RzChallanPackging"}>M/S Rz Back to Challan Packagin Ltd.</Link>
                 </button>
             </div>
            <div className="max-w-4xl mx-auto bg-white border border-gray-300 shadow-xl rounded-xl overflow-hidden pad-container">
                
                {/* 🔵 Print Button */}
                <div className="flex justify-end p-4 sm:p-6 pb-0 no-print">
                    <button onClick={handlePrint} className="flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
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
                    {/* Horizontal Line separating header from body */}
                    <div className="border-t border-gray-800 mt-4"></div>
                </header>

                {/* 🔵 Document Type Label */}
                <div className="text-center py-2">
                    <span className={`text-red] font-black text-lg uppercase tracking-widest bg-${logoColor} px-4 py-1 rounded-md shadow-md`}>{docType}</span>
                </div>

                {/* 🔵 Customer Details Input Section */}
                <div className="p-6 pt-2 space-y-2 text-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InfoField label="Company Name" name="companyName" value={billInfo.companyName} onChange={handleBillInfoChange}className="pr-4"/>
                        <InfoField label="Invoice No." name="invoiceNo" value={billInfo.invoiceNo} onChange={handleBillInfoChange} className="pr-4" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InfoField label="Address" name="address" value={billInfo.address} onChange={handleBillInfoChange}/>
                        <InfoField label="Date" name="date" value={billInfo.date} onChange={handleBillInfoChange} type="date"/>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InfoField label="Contact Person" name="contactPerson" value={billInfo.contactPerson} onChange={handleBillInfoChange} className="pr-4" />
                         <InfoField label="Mobile" name="mobile" value={billInfo.mobile} onChange={handleBillInfoChange} type="tel" />
                    </div>
                    
                    <div className="grid grid-cols-1">
                        <InfoField label="P.O. No." name="poNo" value={billInfo.poNo} onChange={handleBillInfoChange} />
                    </div>
                </div>

                {/* 📦 Item Table Section */}
                <div className="p-6 pt-2">
                    <h3 className="font-bold text-gray-800 flex items-center mb-3 text-lg"><DollarSign className="w-5 h-5 mr-2" /> Billing Details</h3>
                    <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-400">
                        <table className="min-w-full border-collapse text-sm bill-table">
                            <thead className={`bg-gray-200 text-gray-800 font-semibold border-b border-gray-400`}>
                                <tr>
                                    <th className="p-3 w-[5%] border-r border-gray-400">Sl. No.</th>
                                    <th className="p-3 w-[40%] text-left border-r border-gray-400">Description</th>
                                    <th className="p-3 w-[15%] border-r border-gray-400">Total Quantity<br/>KG/Pcs</th>
                                    <th className="p-3 w-[15%] border-r border-gray-400">Unit Price<br/>TK</th>
                                    <th className="p-3 w-[20%] border-r border-gray-400">Total Price<br/>TK</th>
                                    <th className="p-3 w-[5%] no-print"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={item.id} className="h-10 border-b border-gray-300 hover:bg-red-50 transition duration-150">
                                        {/* Sl.No. */}
                                        <td className="p-2 text-center font-medium border-r border-gray-400 bg-gray-50">{index + 1}</td>
                                        
                                        {/* Description */}
                                        <td className="p-0 border-r border-gray-400">
                                            <input type="text" value={item.description} onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}placeholder="Item description"className="w-full h-full p-2 border-none focus:ring-0 focus:outline-none bg-transparent print-input"/>
                                        </td>
                                        
                                        {/* Total Quantity KG/Pcs */}
                                        <td className="p-0 border-r border-gray-400">
                                            <input
                                                type="text"
                                                value={item.quantity}
                                                onChange={(e) => handleItemChange(item.id, 'quantity', e.target.value)}
                                                placeholder="0"
                                                className="w-full h-full p-2 text-right border-none focus:ring-0 focus:outline-none print-input"
                                            />
                                        </td>
                                        
                                        {/* Unit Price TK */}
                                        <td className="p-0 border-r border-gray-400">
                                            <input
                                                type="text"
                                                value={item.unitPrice}
                                                onChange={(e) => handleItemChange(item.id, 'unitPrice', e.target.value)}
                                                placeholder="0.00"
                                                className="w-full h-full p-2 text-right border-none focus:ring-0 focus:outline-none print-input"
                                            />
                                        </td>
                                        
                                        {/* Total Price TK (Calculated) */}
                                        <td className="p-2 text-right font-bold text-gray-800 border-r border-gray-400 bg-red-50">
                                            {item.totalPrice}
                                        </td>
                                        
                                        {/* Action */}
                                        <td className="p-2 text-center no-print">
                                            <button 
                                                onClick={() => removeItemRow(item.id)} 
                                                className="text-red-500 hover:text-red-700 transition duration-150 p-1 rounded-full hover:bg-red-100"
                                                aria-label="Remove item"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="bg-gray-200 font-extrabold border-t-2 border-gray-400">
                                    <td colSpan="4" className="p-3 text-right text-gray-800 border-r border-gray-400">Grand Total</td>
                                    <td className="p-3 text-right text-lg text-red-700 border-r border-gray-400">
                                        {grandTotal.toFixed(2)}
                                    </td>
                                    <td className="p-2 text-center no-print">
                                        <button 
                                            onClick={addItemRow} 
                                            className="text-green-600 hover:text-green-800 transition duration-150 p-1 rounded-full hover:bg-green-100"
                                            aria-label="Add new item row"
                                        >
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
                    <div className="text-sm mb-6">
                        <div className="flex items-start">
                            <label htmlFor="totalInWord" className="w-full sm:w-1/6 font-medium text-gray-700 whitespace-nowrap pt-1">
                                In Words :
                            </label>
                            <input
                                id="totalInWord"
                                name="totalInWord"
                                type="text"
                                value={billInfo.totalInWord}
                                onChange={handleBillInfoChange}
                                placeholder="[Enter Grand Total in words...]"
                                className="flex-grow py-1 px-2 border-b border-dashed border-gray-400 focus:border-red-500 focus:ring-0 outline-none transition-colors duration-150 text-sm print-input"
                            />
                        </div>
                    </div>

                    {/* Terms and Conditions from the image */}
                    <div className="text-xs text-gray-700 space-y-1 mb-8">
                        <p><strong><span className="text-red-600">Payment</span></strong> : By Check / cash.</p>
                        <p><strong><span className="text-red-600">Delivery</span></strong> : Within 3/5 days after receive the irrevocable & confirmed letter of credit order.</p>
                        <p><strong><span className="text-red-600">Offer Validity</span></strong>: One week from the date of issue.</p>
                    </div>

                    {/* Signature Input Lines */}
                    <div className="flex justify-between items-end text-xs mt-12 pt-4">
                        {/* 1. Received By */}
                        <div className="w-[30%] text-center">
                            <input 
                                type="text"
                                name="receivedBy"
                                className="w-full text-center border-t-2 border-gray-800 pt-1 text-gray-800 focus:ring-0 focus:border-red-500 outline-none placeholder-gray-400 font-medium bg-white print-signature-input"
                                placeholder="Name/Signature"
                            />
                            <p className="font-bold text-gray-700 mt-1">Received By</p>
                        </div>
                        
                        {/* 2. Checked By */}
                        <div className="w-[30%] text-center">
                            <input 
                                type="text"
                                name="checkedBy"
                                className="w-full text-center border-t-2 border-gray-800 pt-1 text-gray-800 focus:ring-0 focus:border-red-500 outline-none placeholder-gray-400 font-medium bg-white print-signature-input"
                                placeholder="Name/Stamp"
                            />
                            <p className="font-bold text-gray-700 mt-1">Checked By</p>
                        </div>
                        
                        {/* 3. Authorized By */}
                        <div className="w-[30%] text-center">
                            <input 
                                type="text"
                                name="authorizedBy"
                                className="w-full text-center border-t-2 border-gray-800 pt-1 text-gray-800 focus:ring-0 focus:border-red-500 outline-none placeholder-gray-400 font-medium bg-white print-signature-input"
                                placeholder="Signature/Stamp"
                            />
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
    );
 };

 export default RZBillPackginComponents;