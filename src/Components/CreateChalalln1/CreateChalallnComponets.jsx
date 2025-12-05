import React, { useState } from 'react';
import { Link } from 'react-router-dom';

 // ========== Reusable component for input fields in the header details =========== // 
 const DetailInput = ({ label, name, value, onChange, type = "text", align = "left", labelWidth = "w-1/3" }) => (
    <div className="flex items-center">
        <span className={`${labelWidth} font-medium flex-shrink-0`}>{label}</span>
        <input  name={name} value={value} onChange={onChange} className={`w-full border-b border-dashed border-gray-400 focus:border-solid focus:border-blue-500 focus:outline-none ml-2 p-0.5 text-${align} print-clean`} type={type}/>
    </div>
);

 // Reusable component for signature inputs in the footer
 const SignatureInput = ({ label, name, value, onChange }) => (
    <div className="text-center flex flex-col justify-end">
        <input name={name} value={value} onChange={onChange} className="w-full p-1 text-center border-none focus:outline-none focus:ring-0 focus:border-blue-500 text-sm mb-1 bg-gray-50 rounded-sm signature-input" type="text"placeholder={`Enter ${label}'s name`}/>
        <p className="border-t border-black pt-1 font-medium text-sm sm:text-base">
          {label}
        </p>
    </div>
 );


 // ======== Main Challan Component ======== // 
 const CreateChalallnComponets = () => {
    const companyData = {
        name: "M/S LINDA TECHNOLOGY",
        logoText: "LT",
        slogan: "ALL KINDS OF GARMENTS ACCESSORIES MANUFACTURER AND IMPORTER",
        headOffice: "House # 16 (Level-4A), Road # 10, Sector # 06, Uttara, Dhaka-1230,",
        paperFactory: "Kathghora, Uttar-Mollabari More, Zirabo, Ashulia, Savar, Dhaka",
        contact: "0164-959595, 01821-885320, 01302-246036, 01712-755533",
        email1: "symoom@gmaillindarechnologybd.com",
        email2: "ferdous@gmaillindarechnologybd.com",
        website: "lindatechnologybd.com",
        docType: "M/S LT. CHALLAN",
        themeColor: "red-600"
    };

    // ======== Initial state for header details (used for reset) ========== // 
    const initialDetails = {
        companyName: '',
        address: '',
        challanNo: '',
        date: new Date().toLocaleDateString('en-CA'), 
        contactPerson: '',
        mobile: '',
        poNo: '',
        inWord: '',
        receivedBy: '',
        checkedBy: '',
        authorizedBy: ''
    };
    const [details, setDetails] = useState(initialDetails);

    // =========== Initial state for table items (used for reset) ========= // 
    const ROWS_COUNT = 12; 
    const initialItems = Array(ROWS_COUNT).fill(null).map(() => ({
        description: '',
        size: '',
        qtyRollPcs: '',
        qtyKgsBox: ''
    }));

    const [items, setItems] = useState(initialItems);

    // ========= Calculate Grand Total for display =========== // 
    const grandTotalKgsBox = items.reduce((sum, item) => sum + (parseFloat(item.qtyKgsBox) || 0), 0).toFixed(2);

    const handleDetailChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    const handleItemChange = (index, e) => {
        // ========= Fix: Use e.target.name directly (e.g., 'description' not 'description:') ========= // 
        const newItems = items.map((item, i) => {
            if (i === index) {
                return { ...item, [e.target.name]: e.target.value };
            }
            return item;
        });
        setItems(newItems);
    };
    
    // ============ Function to handle printing =========== // 
    const handlePrint = () => {
        window.print();
    };

    // ============ Function to handle "Back" (Clear Form) =========== //
    const handleBack = () => {
        // ========= Simulating navigation back by resetting all form data ========== // 
        setDetails(initialDetails);
        setItems(initialItems);
        // ======== In a real application with React Router, you would use: navigate('/CreateBill'); ========= // 
        console.log("Back button clicked. Form data has been reset to simulate returning to a previous page/state.");
    };

    // ======== Note: Tailwind requires the full class string. Using dynamic string concatenation like ========= // 
    const { name, slogan, headOffice, paperFactory, contact, email1, email2, website, docType, themeColor } = companyData;
    const textColor = `text-${themeColor}`;
    const bgColor = `bg-${themeColor}`;

    // ======= Tailwind JIT workaround classes for dynamic color variables =========== // 
    const colorUtilityClasses = `
        .text-red-600 { color: #dc2626; }
        .border-red-600 { border-color: #dc2626; }
        .bg-red-600 { background-color: #dc2626; }
        .hover\\:bg-red-700:hover { background-color: #b91c1c; }
    `;

    // =========== Custom CSS for print optimization ============ // 
    const printStyles = `
 /* Ensure Tailwind dynamic classes are available */
 ${colorUtilityClasses}

 /* Styles for A4 paper size and minimal margins */
        @page {
            size: A4;
            margin: 10mm 5mm 5mm 5mm; /* Top, Right, Bottom, Left margins */
        }
        @media print {
            /* Hide non-essential elements for printing */
            .print-hidden, .print-hidden * {
                display: none !important;
            }
            /* Ensure the body background is white */
            body {
                background-color: white !important;
            }
            /* Remove container shadow and border for clean print */
            .challan-container {
                border: none !important;
                box-shadow: none !important;
                border-radius: 0 !important;
                overflow: visible !important;
                width: 100%;
                max-width: 100%;
            }
            /* Ensure table cells do not have padding/background from hover states */
            .item-row:hover {
                background-color: inherit !important;
            }
            /* Ensure all input fields look like static text with solid borders */
            input.print-clean {
                border: none !important; /* Remove existing borders */
                border-bottom: 1px solid black !important;
                background-color: transparent !important;
                box-shadow: none !important;
                padding: 0 2px !important;
                outline: none !important;
            }
            /* Make signature input background transparent and remove border */
            .signature-input {
                background-color: transparent !important;
                border: none !important;
            }
        }
    `;

    return (
      <>
        <div className="p-2 sm:p-4 lg:p-6 bg-gray-50 min-h-screen font-sans">           
            {/* Inject Custom Print Styles and JIT workaround */}
            <style dangerouslySetInnerHTML={{__html: printStyles}} />
            
            {/* ⬅️ Back Button (Hidden during print) */}
            <div className="max-w-7xl mx-auto flex justify-between mb-4 print-hidden">
                <button onClick={handleBack}  className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    <Link className='' target='blank' to={"/CreateBill"}>M/S LT. Back To Bill</Link>
                </button>

                {/* 🖨️ Print / PDF Download Button (Hidden during print) */}
                <button onClick={handlePrint} className="px-4 py-2 bg-red-600 text-white font-bold rounded-lg shadow-xl hover:bg-red-700 transition duration-200 flex items-center space-x-2" >
                    {/* Unicode for Printer Icon */}
                    <span role="img" aria-label="print">🖨️</span>
                    <span>Print / Download PDF</span>
                </button>
            </div>

            <div className="max-w-7xl mx-auto bg-white border-2 border-gray-400 shadow-2xl rounded-lg overflow-hidden transition-all duration-300 challan-container">
                
                {/* 🔴 Header Section (Company Info) */}
                <header className="p-4 sm:p-6 border-b border-gray-300">
               <div className="flex flex-col ml-[200px] sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                   {/* Left - Logo */}
                   <div className="flex-shrink-0">
                     <img src="/images/ms.jpg.png" alt="logo" className="w-28 h-28 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-red-500 shadow-lg"/>
                   </div>
                 
                   {/* Right - Text */}
                    <div className="flex flex-col justify-center text-center sm:text-left">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-red-600 print:text-black">
                    {name}
                     </h1>  
                                 
                     <p className="text-sm sm:text-base text-gray-800 font-bold mt-1">
                     {slogan}
                     </p>

                     <div className="text-xs sm:text-sm text-gray-600 space-y-1 mt-2">
                       <h2><span className="font-semibold">Head Office:</span> {headOffice}</h2>
                       <h3><span className="font-semibold">Paper Factory:</span> {paperFactory}</h3>
                       <h3 className="text-black print:text-black">Contact: {contact}</h3>
                       <h3><span className="font-semibold">E-mail:</span> {email1}, {email2}</h3>
                      </div>

                     <h2 className="mt-3 font-bold text-sm sm:text-base text-blue-600 hover:underline cursor-pointer">
                       Website Address: {website}
                     </h2>
                   </div>
                  </div>


                </header>

                {/* 🔴 Document Type Label */}
                <div className={`text-center py-2 ${bgColor} print:bg-gray-200`}>
                    <span className="text-white font-black text-xl sm:text-2xl uppercase tracking-widest print:text-black">{docType}</span>
                </div>

                {/* 🔴 Customer Details Section (WITH INPUTS) */}
                <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                    {/* Column 1: Customer Info */}
                    <div className="flex flex-col space-y-2">
                        <DetailInput label="Company Name:" name="companyName" value={details.companyName} onChange={handleDetailChange} />
                        <DetailInput label="Address:" name="address" value={details.address} onChange={handleDetailChange} />
                    </div>

                    {/* Column 2: Document Info */}
                    <div className="flex flex-col space-y-2">
                        <DetailInput label="Challan No:" name="challanNo" value={details.challanNo} onChange={handleDetailChange} align="right"/>
                        <DetailInput label="Date:" name="date" value={details.date} onChange={handleDetailChange} type="date" align="right"/>
                    </div>
                    
                    {/* Full Width Row: Contact & P.O. */}
                    <div className="flex flex-col space-y-2 md:col-span-2 mt-2 border-t pt-4 border-gray-200">
                        <div className="grid grid-cols-2 gap-4">
                            <DetailInput label="Contact Person:" name="contactPerson" value={details.contactPerson} onChange={handleDetailChange} labelWidth="w-1/3"/>
                            <DetailInput label="Mobile:" name="mobile" value={details.mobile} onChange={handleDetailChange} labelWidth="w-1/3"/>
                        </div>
                        <div className="flex items-center">
                            <span className="w-1/3 md:w-1/5 font-medium flex-shrink-0">P.O. No.:</span>
                            <input name="poNo" value={details.poNo} onChange={handleDetailChange} className="w-full border-b border-dashed border-gray-400 focus:border-solid focus:border-blue-500 focus:outline-none ml-2 p-0.5 print-clean" type="text"/>
                        </div>
                    </div>
                </div>

                {/* 🔴 Item Table Section (WITH INPUTS) */}
                <div className="p-4 sm:p-6 pt-0">
                    <div className="overflow-x-auto shadow-md rounded-lg print:shadow-none">
                        <table className="min-w-full border-collapse border border-gray-400 text-sm">
                            <thead className="bg-gray-200 sticky top-0">
                                <tr>
                                    <th className="border border-gray-400 p-2 w-[5%] min-w-[50px]">Sl.No. :</th>
                                    <th className="border border-gray-400 p-2 w-[40%] min-w-[200px]">Description :</th>
                                    <th className="border border-gray-400 p-2 w-[15%] min-w-[80px]">Size :</th>
                                    <th className="border border-gray-400 p-2 w-[20%] min-w-[100px]">Quantity (Roll/Pcs) :</th>
                                    <th className="border border-gray-400 p-2 w-[20%] min-w-[100px]">Quantity (Kgs/Box) :</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Loop for 12 rows */}
                                {items.map((item, index) => (
                                    <tr key={index} className="h-8 sm:h-9 even:bg-gray-50 hover:bg-yellow-50/50 transition-colors item-row print:even:bg-white">
                                        <td className="border border-gray-400 p-2 text-center font-semibold">{index + 1}</td>
                                        <td className="border border-gray-400 p-0">
                                          {/* FIX: name attribute updated from 'description:' to 'description' */}
                                            <input name="description" value={item.description} onChange={(e) => handleItemChange(index, e)} className="w-full h-full p-2 border-none focus:ring-0 focus:border-blue-500 focus:bg-white bg-transparent transition-all item-input print:outline-none print:border-none print:bg-white" placeholder="Enter item description"/>
                                        </td>
                                        <td className="border border-gray-400 p-0">
                                          {/* FIX: name attribute updated from 'size:' to 'size' */}
                                            <input name="size" value={item.size} onChange={(e) => handleItemChange(index, e)} className="w-full h-full p-2 border-none focus:ring-0 focus:border-blue-500 focus:bg-white bg-transparent text-center transition-all item-input print:outline-none print:border-none print:bg-white"/>
                                        </td>
                                        <td className="border border-gray-400 p-0">
                                          {/* FIX: name attribute updated from 'qtyRollPcs:' to 'qtyRollPcs' */}
                                            <input name="qtyRollPcs" value={item.qtyRollPcs} onChange={(e) => handleItemChange(index, e)} className="w-full h-full p-2 border-none focus:ring-0 focus:border-blue-500 focus:bg-white bg-transparent text-right transition-all item-input print:outline-none print:border-none print:bg-white"type="number"/>
                                        </td>
                                        <td className="border border-gray-400 p-0">
                                          {/* FIX: name attribute updated from 'qtyKgsBox:' to 'qtyKgsBox' */}
                                            <input name="qtyKgsBox" value={item.qtyKgsBox} onChange={(e) => handleItemChange(index, e)} className="w-full h-full p-2 border-none focus:ring-0 focus:border-blue-500 focus:bg-white bg-transparent text-right transition-all item-input print:outline-none print:border-none print:bg-white" type="number"/>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="bg-gray-100 font-bold border-t-2 border-gray-500 print:bg-gray-200">
                                    <td colSpan="4" className="border border-gray-400 p-2 text-right">Grand Total (Total of Qty Kgs/Box) :</td>
                                    <td className="border border-gray-400 p-2 text-right">
                                        {grandTotalKgsBox}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                {/* 🔴 Footer & Signature Section (WITH INPUTS) */}
                <div className="p-4 sm:p-6 border-t border-gray-300">
                    <div className="text-sm mb-8">
                        <div className="flex items-center">
                            <span className="w-1/6 min-w-[80px] font-medium flex-shrink-0">In Word:</span>
                            {/* FIX: name attribute updated from 'inWord:' to 'inWord' */}
                            <input name="inWord" value={details.inWord} onChange={handleDetailChange} className="w-full border-b border-dashed border-gray-400 focus:border-solid focus:border-blue-500 focus:outline-none ml-2 p-0.5 print-clean" type="text" placeholder="Enter total amount in words"/>
                        </div>
                    </div>
                    
                    {/* Signature Area with Inputs */}
                    <div className="grid grid-cols-3 gap-4 justify-between items-end text-sm mt-8 pt-3 border-t border-gray-400">                     
                        <SignatureInput label="Received By" name="receivedBy" value={details.receivedBy} onChange={handleDetailChange} />
                        <SignatureInput label="Checked By" name="checkedBy" value={details.checkedBy} onChange={handleDetailChange} />
                        <SignatureInput label="Authorized By" name="authorizedBy" value={details.authorizedBy} onChange={handleDetailChange} />
                        
                    </div>
                </div>

                {/* 🔴 Red Footer Bar */}
                <div className={`h-3 ${bgColor} print:bg-gray-200`}></div>

            </div>
        </div>     
      </>
    );
 };

 export default CreateChalallnComponets;
//  fjdnnjkantkjisal