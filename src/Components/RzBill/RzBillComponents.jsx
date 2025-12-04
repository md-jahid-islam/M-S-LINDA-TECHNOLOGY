import React, { useState, useMemo } from 'react';
import { Plus, Trash2, Calculator, Info, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const SELLER_DATA = {
    name: "M/S RAHAT ZARIF ACCESSORIES",
    logoText: "RZ",
    slogan: "ALL KINDS OF GARMENTS ACCESSORIES MANUFACTURER AND IMPORTER",
    address: "Head Office: House #6 (Level-4), Road #10, Sector #66, Uttara, Dhaka-1230 | Factory: 7A/2, Dhorpara Road, Ward No-51, Shatalish, Tongi, Gazipur.",
    contact: "0161-959-9595, 0182-138-5320, 01702-246036, 01998-589117",
    website: "www.lindatechnologybd.com",
    email: "symoom@gmaillindarechnologybd.com, ferdous@gmaillindarechnologybd.com",
    docType: "M/S RZ BILL",
    themeColor: "red-600"
};

// Initial state for a single item row
const initialItem = {
    id: crypto.randomUUID(),
    description: '',
    quantity: '',
    unitPrice: '',
    totalPrice: '0.00',
};

const RzBillComponents = () => {
    const { name, logoText, slogan, address, contact, website, email, docType, themeColor } = SELLER_DATA;

    // State for all dynamic bill information
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
        // NEW FIELDS for signature section
        receivedBySignature: '',
        checkedBySignature: '',
        authorizedBySignature: '',
    });

    // Memoize the calculation of the grand total
    const grandTotal = useMemo(() => {
        return items.reduce((sum, item) => {
            const price = parseFloat(item.totalPrice || 0);
            return sum + price;
        }, 0).toFixed(2);
    }, [items]);

    // Handler for general bill information fields (top section and footer signature fields)
    const handleBillInfoChange = (e) => {
        const { name, value } = e.target;
        setBillInfo(prev => ({ ...prev, [name]: value }));
    };

    // Handler for changing values in the item table
    const handleItemChange = (id, field, value) => {
        setItems(prevItems => {
            const newItems = prevItems.map(item => {
                if (item.id === id) {
                    const updatedItem = { ...item, [field]: value };
                    
                    // Calculation logic: Qty * Price = Total
                    if (field === 'quantity' || field === 'unitPrice') {
                        const qty = parseFloat(updatedItem.quantity) || 0;
                        const price = parseFloat(updatedItem.unitPrice) || 0;
                        updatedItem.totalPrice = (qty * price).toFixed(2);
                    }
                    return updatedItem;
                }
                return item;
            });
            return newItems;
        });
    };

    // Function to add a new item row
    const addItemRow = () => {
        setItems(prevItems => [...prevItems, { ...initialItem, id: crypto.randomUUID() }]);
    };

    // Function to remove an item row
    const removeItemRow = (id) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    // Handler for triggering the browser's print dialog
    const handlePrint = () => {
        window.print();
    };

    const InputField = ({ label, name, value, onChange, placeholder = "", type = "text", className = "w-2/3" }) => (
        <div className="flex flex-col sm:flex-row items-start sm:items-center py-1">
            <label htmlFor={name} className="w-full sm:w-1/3 font-medium text-gray-700 text-xs sm:text-sm whitespace-nowrap mb-1 sm:mb-0">
                {label}
            </label>
            <input id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`py-1 px-2 border-b border-gray-400 focus:border-blue-500 focus:ring-0 outline-none transition-colors duration-150 rounded-sm text-sm ${className} print-input`}
                required
            />
        </div>
    );

    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen font-sans">
            <style>{`
                @media print {
                    /* Hide non-essential print elements */
                    .no-print {
                        display: none !important;
                    }

                    /* Ensure input fields look like plain text */
                    .print-input, .print-signature-input, input:not([type="date"]) {
                        border: none !important;
                        padding: 0 !important;
                        box-shadow: none !important;
                        background-color: transparent !important;
                    }
                    
                    /* Specific override for signature lines */
                    .print-signature-input {
                        border-top: 1px solid black !important;
                    }
                    
                    /* Show all borders for table and main bill structure */
                    .bill-container {
                        box-shadow: none !important;
                        border: none !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        border-radius: 0 !important;
                        min-width: 100%; /* Ensure full print width */
                    }
                    
                    /* Ensure content takes up full width for print */
                    body {
                        background-color: white !important;
                    }
                }
            `}</style>
            <div>
              <button className='bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out flex items-center space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                 </svg>
                <Link to={"/CreateChalalln1"}>M/S RZ Back To Bill</Link>
              </button>
              </div>    
            <div className="max-w-4xl mx-auto bg-white border border-gray-300 shadow-2xl rounded-xl overflow-hidden bill-container">
                
                {/* 🔵 Print Button */}
                <div className="flex justify-end p-4 sm:p-6 pb-0 no-print">
                    <button onClick={handlePrint} className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200">
                        <span className="text-lg">🖨️ Print / Download PDF</span>
                    </button>
                </div>

                {/* 🔵 Header Section */}
                <header className="p-4 sm:p-6 border-b border-gray-300">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    {/* Left - Logo */}
                       <div className="flex-shrink-0">
                       <img src="/images/rzlogocreate.png" alt="logo" className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-red-500 shadow-md"/>
                       </div>
                        <div className="flex-grow">
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{name}</h1>
                            <p className="text-xs sm:text-sm text-gray-700 font-medium italic">{slogan}</p>
                            <p className="text-[10px] sm:text-xs text-gray-500 mt-1 leading-tight">{address}</p>
                            <p className={`text-xs sm:text-sm text-blue-700 font-semibold mt-1`}>Contact: {contact}
                            </p>
                            <p className="text-xs text-gray-600">
                            Website: <a href={`http://${website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{website}</a> | E-mail: {email}
                            </p>
                        </div>
                    </div>
                </header>

                {/* 🔵 Document Type Label */}
                <div className={`text-center py-3 bg-red-600`}>
                    <span className="text-white font-black text-xl uppercase tracking-widest">{docType}</span>
                </div>

                {/* 🔵 Customer Details Input Section */}
                <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    <div className="space-y-2 border p-3 rounded-lg shadow-inner bg-gray-50">
                        <h3 className="font-bold text-gray-800 flex items-center mb-2 text-md"><Info className="w-4 h-4 mr-2" /> Billing Information</h3>
                        <InputField
                            label="Company Name"
                            name="companyName"
                            value={billInfo.companyName}
                            onChange={handleBillInfoChange}
                            placeholder="Customer Company Name"
                            className="w-full sm:w-2/3"
                        />
                        <InputField
                            label="Address"
                            name="address"
                            value={billInfo.address}
                            onChange={handleBillInfoChange}
                            placeholder="Billing Address"
                            className="w-full sm:w-2/3"
                        />
                        <InputField
                            label="Contact Person"
                            name="contactPerson"
                            value={billInfo.contactPerson}
                            onChange={handleBillInfoChange}
                            placeholder="Name"
                            className="w-full sm:w-2/3"
                        />
                        <InputField
                            label="Mobile No."
                            name="mobile"
                            value={billInfo.mobile}
                            onChange={handleBillInfoChange}
                            placeholder="+880..."
                            type="tel"
                            className="w-full sm:w-2/3"
                        />
                    </div>

                    <div className="space-y-2 border p-3 rounded-lg shadow-inner bg-gray-50">
                        <h3 className="font-bold text-gray-800 flex items-center mb-2 text-md"><Calendar className="w-4 h-4 mr-2" /> Document Details</h3>
                        <InputField
                            label="Invoice No."
                            name="invoiceNo"
                            value={billInfo.invoiceNo}
                            onChange={handleBillInfoChange}
                            placeholder="e.g., RZ-00123"
                            className="w-full sm:w-2/3"
                        />
                         <InputField
                            label="P.O. No."
                            name="poNo"
                            value={billInfo.poNo}
                            onChange={handleBillInfoChange}
                            placeholder="Customer Purchase Order"
                            className="w-full sm:w-2/3"
                        />
                        <InputField
                            label="Date"
                            name="date"
                            value={billInfo.date}
                            onChange={handleBillInfoChange}
                            type="date"
                            className="w-full sm:w-2/3"
                        />
                    </div>
                </div>

                {/* 🔵 Item Table Section */}
                <div className="p-4 sm:p-6 pt-0">
                    <h3 className="font-bold text-gray-800 flex items-center mb-3 text-lg"><Calculator className="w-5 h-5 mr-2" /> Items & Calculations</h3>
                    <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-300">
                        <table className="min-w-full border-collapse text-sm">
                            <thead className="bg-red-600 text-white sticky top-0">
                                <tr>
                                    <th className="p-3 w-[5%]">SI. No. </th>
                                    <th className="p-3 w-[40%] text-left">Description</th>
                                    <th className="p-3 w-[15%]">Quantity (KG/Pcs)</th>
                                    <th className="p-3 w-[15%]">Unit Price (TK)</th>
                                    <th className="p-3 w-[15%]">Total Price (TK)</th>
                                    <th className="p-3 w-[10%] no-print">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={item.id} className="h-10 border-b border-gray-200 hover:bg-blue-50 transition duration-150">
                                        {/* Sl.No. */}
                                        <td className="p-2 text-center font-medium bg-gray-50">{index + 1}</td>
                                        
                                        {/* Description */}
                                        <td className="p-0">
                                            <input
                                                type="text"
                                                value={item.description}
                                                onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                                                placeholder="Enter item description"
                                                className="w-full h-full p-2 border-none focus:ring-0 focus:outline-none bg-transparent print-input"
                                            />
                                        </td>
                                        
                                        {/* Quantity */}
                                        <td className="p-0">
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                onChange={(e) => handleItemChange(item.id, 'quantity', e.target.value)}
                                                placeholder="0"
                                                className="w-full h-full p-2 text-right border-none focus:ring-0 focus:outline-none print-input"
                                                min="0"
                                            />
                                        </td>
                                        
                                        {/* Unit Price */}
                                        <td className="p-0">
                                            <input
                                                type="number"
                                                value={item.unitPrice}
                                                onChange={(e) => handleItemChange(item.id, 'unitPrice', e.target.value)}
                                                placeholder="0.00"
                                                className="w-full h-full p-2 text-right border-none focus:ring-0 focus:outline-none print-input"
                                                min="0"
                                            />
                                        </td>
                                        
                                        {/* Total Price (Readonly) */}
                                        <td className="p-2 text-right font-semibold bg-gray-100 text-black">
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
                                <tr className="bg-gray-200 font-extrabold border-t-2 border-red-600">
                                    <td colSpan="4" className="p-3 text-right text-gray-800">GRAND TOTAL (TK)</td>
                                    <td className="p-3 text-right text-lg text-black">{grandTotal}</td>
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

                {/* 🔵 Footer & Signature Section (Updated with Input Fields) */}
                <div className="p-4 sm:p-6 border-t border-gray-300">
                    <div className="text-sm mb-4">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center">
                            <label htmlFor="totalInWord" className="w-full sm:w-1/6 font-medium text-gray-700 whitespace-nowrap mb-1 sm:mb-0">
                                In Word
                            </label>
                            <input
                                id="totalInWord"
                                name="totalInWord"
                                type="text"
                                value={billInfo.totalInWord}
                                onChange={handleBillInfoChange}
                                placeholder={`Taka ${grandTotal} only... (Click here to type)`}
                                className="flex-grow py-1 px-2 border-b border-dashed border-gray-400 focus:border-blue-500 focus:ring-0 outline-none transition-colors duration-150 text-sm print-input"
                            />
                        </div>
                        
                        {/* Bill Specific Terms */}
                        <div className="mt-6 p-4 border border-gray-300 bg-blue-50 rounded-lg text-xs shadow-inner no-print">
                            <p className={`font-black mb-1 text-black text-sm`}>Terms & Conditions:</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>Payment: By Check / Cash.</li>
                                <li>Delivery: Within 3/5 days after receipt of the irrevocable & confirmed letter of credit order.</li>
                                <li>Offer Validity: One week from the date of issue.</li>
                                <li>Goods once sold cannot be returned or exchanged.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Signature Input Lines */}
                    <div className="flex justify-between items-end text-xs mt-12 pt-4">
                        {/* 1. Received By */}
                        <div className="w-[30%] text-center">
                            <input 
                                type="text"
                                name="receivedBySignature"
                                value={billInfo.receivedBySignature}
                                onChange={handleBillInfoChange}
                                className="w-full text-center text-gray-800 focus:ring-0 focus:border-blue-500 outline-none placeholder-gray-400 font-medium bg-white print-signature-input"
                                placeholder="Name/Signature"
                            />
                            <p className=' border-t-2 border-gray-800 mt-2 '></p>
                            <p className="font-bold text-gray-700 mt-1">Received By</p>
                        </div>
                        
                        {/* 2. Checked By */}
                        <div className="w-[30%] text-center">
                            <input 
                                type="text"
                                name="checkedBySignature"
                                value={billInfo.checkedBySignature}
                                onChange={handleBillInfoChange}
                                className="w-full text-center focus:ring-0 focus:border-blue-500 outline-none placeholder-gray-400 font-medium bg-white print-signature-input"
                                placeholder="Name/Stamp"
                            />

                             <p className=' border-t-2 border-gray-800 mt-2 '></p>
                            <p className="font-bold text-gray-700 mt-1">Checked By</p>
                        </div>
                        
                        {/* 3. Authorized By (Signature Line + Company Name) */}
                        <div className="w-[30%] text-center">
                            <input 
                                type="text"
                                name="authorizedBySignature"
                                value={billInfo.authorizedBySignature}
                                onChange={handleBillInfoChange}
                                className="w-full text-center focus:ring-0 focus:border-blue-500 outline-none placeholder-gray-400 font-medium bg-white print-signature-input"
                                placeholder="Signature/Stamp"
                            />
                            
                            <p className=' border-t-2 border-gray-800 mt-2 '></p>
                            <p className="font-bold text-black text-sm mt-1">{SELLER_DATA.name}</p>
                            <p className="italic text-gray-600">(Authorized Signature)</p>
                        </div>
                    </div>
                </div>

                {/* 🔵 Blue Footer Bar */}
                <div className={`h-4 bg-red-600`}></div>

            </div>
        </div>
    );
};

export default RzBillComponents;