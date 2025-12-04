import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit, FiSave, FiTrash2 } from "react-icons/fi";

 // ============ CreateChallanComponents ============ // 
 const CreateChallanComponents = () => {
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });
  
   // ========== useState ========== // 
  const [items, setItems] = useState([
    { productName: "", description: "", quantity: 1, price: 0, total: 0, image: null },
  ]);

  const [editRow, setEditRow] = useState(null);
 
  // ========== handleCustomerChange ============ // 
  const handleCustomerChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };
 
  // ============= handleItemChange ============= // 
  const handleItemChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    updated[index].total = updated[index].quantity * updated[index].price;
    setItems(updated);
  };

 // =========== handleImageChange =============== // 
  const handleImageChange = (index, file) => {
    const updated = [...items];
    updated[index].image = file ? URL.createObjectURL(file) : null;
    setItems(updated);
  };
 
  // ============ addRowv =========== // 
  const addRow = () => {
    setItems([
      ...items,
      { productName: "", description: "", quantity: 1, price: 0, total: 0, image: null },
    ]);
  };
 
  // ========== deleteRow =========== // 
  const deleteRow = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  const grandTotal = items.reduce((acc, item) => acc + item.total, 0);
 
  // =========== handlePrint ========== // 
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="container mx-auto px-4 py-3.5">
        <div>
          <h1 className="text-2xl font-bold mb-5 text-blue-600">
            M/S Linda Technology Challan & Bill  M/S Rahat Zarif Challan & Bill 
           M/S Rahat Zarif Packaging Ltd.
            <br />
          </h1>

          {/*bill challlan button */}
          <div className="flex gap-5 flex-wrap">
            <Link className="px-4 py-2 text-white rounded-lg bg-blue-600 hover:bg-green-400" target="blank" to="/CreateChalalln1"> M/S LT. Challan Ltd.</Link>
            <Link className="px-4 py-2 text-white rounded-lg bg-blue-600 hover:bg-green-400" target="blank" to="/CreateBill"> M/S LT. Bill Ltd.</Link>
            <Link className="px-4 py-2 text-white rounded-lg bg-blue-600 hover:bg-green-400" target="blank" to="/RzChalllan"> M/S RZ. Challan Ltd. </Link>
            <Link className="px-4 py-2 text-white rounded-lg bg-blue-600 hover:bg-green-400" target="blank" to="/RzBill"> M/S RZ. Bill Ltd.</Link>
            <Link className="px-4 py-2 text-white rounded-lg bg-blue-600 hover:bg-green-400" target="blank" to="/RZWritingPad"> M/S RZ. Pad Ltd.</Link>
            <Link className="px-4 py-2 text-white rounded-lg bg-blue-600 hover:bg-green-400" target="blank" to="/RzChallanPackging"> M/S RZ. Packaging Challan Ltd.</Link>
            <Link className="px-4 py-2 text-white rounded-lg bg-blue-600 hover:bg-green-400" target="blank" to="/RZBillPackgin"> M/S RZ. Packaging Bill Ltd.</Link>
          </div>
        </div>

        {/* Customer Info */}
        <div className="bg-white shadow-md p-6 rounded-lg mb-8 mt-6">
          <h2 className="text-lg font-semibold mb-4">Customer Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" name="name" className="border px-3 py-2 rounded-lg" placeholder="Customer Name" onChange={handleCustomerChange} />
            <input type="text" name="phone" className="border px-3 py-2 rounded-lg" placeholder="Phone Number" onChange={handleCustomerChange} />
            <input type="text" name="address" className="border px-3 py-2 rounded-lg" placeholder="Address" onChange={handleCustomerChange} />
          </div>
        </div>

        {/* Product / Service Table */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Product / Service Details</h2>

          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">Product Name</th>
                  <th className="border p-2">Description</th>
                  <th className="border p-2">Qty</th>
                  <th className="border p-2">Price</th>
                  <th className="border p-2">Total</th>
                  <th className="border p-2">Image</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>

              <tbody>
                {items.map((item, index) => (
                  <tr key={index} className="border">

                    {/* Product Name */}
                    <td className="p-2 border">
                      {editRow === index ? (
                        <input
                          type="text"
                          className="w-full border px-2 py-1 rounded"
                          value={item.productName}
                          onChange={(e) => handleItemChange(index, "productName", e.target.value)}
                        />
                      ) : (
                        item.productName
                      )}
                    </td>

                    {/* Description */}
                    <td className="p-2 border">
                      {editRow === index ? (
                        <input
                          type="text"
                          className="w-full border px-2 py-1 rounded"
                          value={item.description}
                          onChange={(e) => handleItemChange(index, "description", e.target.value)}
                        />
                      ) : (
                        item.description
                      )}
                    </td>

                    {/* Quantity */}
                    <td className="p-2 border">
                      {editRow === index ? (
                        <input
                          type="number"
                          className="w-full border px-2 py-1 rounded"
                          value={item.quantity}
                          onChange={(e) => handleItemChange(index, "quantity", Number(e.target.value))}
                        />
                      ) : (
                        item.quantity
                      )}
                    </td>

                    {/* Price */}
                    <td className="p-2 border">
                      {editRow === index ? (
                        <input
                          type="number"
                          className="w-full border px-2 py-1 rounded"
                          value={item.price}
                          onChange={(e) =>
                            handleItemChange(index, "price", Number(e.target.value))
                          }
                        />
                      ) : (
                        item.price
                      )}
                    </td>

                    {/* Total */}
                    <td className="p-2 border text-right font-semibold">{item.total}</td>

                    {/* Image */}
                    <td className="p-2 border text-center">
                      {editRow === index ? (
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageChange(index, e.target.files[0])}
                        />
                      ) : item.image ? (
                        <img src={item.image} className="w-12 h-12 object-cover border rounded mx-auto" />
                      ) : (
                        "-"
                      )}
                    </td>

                    {/* Action Buttons */}
                    <td className="p-2 border text-center flex gap-3 justify-center">
                      {editRow === index ? (
                        <FiSave
                          onClick={() => setEditRow(null)}
                          className="text-green-600 text-xl cursor-pointer"
                        />
                      ) : (
                        <FiEdit
                          onClick={() => setEditRow(index)}
                          className="text-blue-600 text-xl cursor-pointer"
                        />
                      )}

                      <FiTrash2
                        onClick={() => deleteRow(index)}
                        className="text-red-600 text-xl cursor-pointer"
                      />
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>

            {/* Add Row */}
            <button
              onClick={addRow}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              + Add Item
            </button>
          </div>
        </div>

        {/* Total + Print */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-xl font-semibold">
            Grand Total: <span className="text-green-600 font-bold">{grandTotal} ৳</span>
          </h2>

          <button
            onClick={handlePrint}
            className="mt-4 md:mt-0 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            Print / Download PDF
          </button>
        </div>
      </div>
    </>
  );
 };

 export default CreateChallanComponents;
