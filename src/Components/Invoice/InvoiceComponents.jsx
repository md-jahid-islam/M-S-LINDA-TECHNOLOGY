import React, { useState, useEffect, useRef } from "react";
import {
  FiEdit,
  FiTrash2,
  FiPlus,
  FiPrinter,
  FiSave,
  FiCheckSquare,
} from "react-icons/fi";

const InvoiceComponents = () => {
  const [invoices, setInvoices] = useState([]);
  const [editId, setEditId] = useState(null);
  const [invoiceData, setInvoiceData] = useState({
    customer: "",
    date: "",
    status: "Unpaid",
    items: [{ description: "", qty: 1, price: 0 }],
  });
  const [search, setSearch] = useState("");
  const invoiceRef = useRef();

  // Load from LocalStorage
  useEffect(() => {
    const savedInvoices = JSON.parse(localStorage.getItem("invoices")) || [];
    setInvoices(savedInvoices);
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoices));
  }, [invoices]);

  const generateInvoiceId = () =>
    invoices.length ? Math.max(...invoices.map((i) => i.id)) + 1 : 1;

  const addItem = () => {
    setInvoiceData({
      ...invoiceData,
      items: [...invoiceData.items, { description: "", qty: 1, price: 0 }],
    });
  };

  const removeItem = (index) => {
    const newItems = invoiceData.items.filter((_, i) => i !== index);
    setInvoiceData({ ...invoiceData, items: newItems });
  };

  const handleSaveInvoice = () => {
    if (!invoiceData.customer || !invoiceData.date || invoiceData.items.length === 0) {
      alert("Please fill all fields and items.");
      return;
    }

    if (editId !== null) {
      setInvoices(
        invoices.map((inv) =>
          inv.id === editId ? { ...invoiceData, id: editId } : inv
        )
      );
    } else {
      const newId = generateInvoiceId();
      setInvoices([...invoices, { ...invoiceData, id: newId }]);
    }

    setEditId(null);
    setInvoiceData({
      customer: "",
      date: "",
      status: "Unpaid",
      items: [{ description: "", qty: 1, price: 0 }],
    });
  };

  const handleEditInvoice = (invoice) => {
    setEditId(invoice.id);
    setInvoiceData({ ...invoice });
  };

  const handleDeleteInvoice = (id) => {
    if (window.confirm("Are you sure you want to delete this invoice?")) {
      setInvoices(invoices.filter((inv) => inv.id !== id));
    }
  };

  const toggleStatus = (id) => {
    setInvoices(
      invoices.map((inv) =>
        inv.id === id
          ? { ...inv, status: inv.status === "Paid" ? "Unpaid" : "Paid" }
          : inv
      )
    );
  };

  const filteredInvoices = invoices.filter(
    (inv) =>
      inv.customer.toLowerCase().includes(search.toLowerCase()) ||
      inv.date.includes(search)
  );

  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <div className="w-full max-w-7xl mx-auto p-5">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">
        Invoice Management
      </h2>

      {/* Search */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by customer or date..."
          className="border p-2 rounded w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Invoice Form */}
      <div className="mb-6 p-5 bg-white rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-4">
          {editId ? "Edit Invoice" : "New Invoice"}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Customer Name"
            className="border p-2 rounded w-full"
            value={invoiceData.customer}
            onChange={(e) =>
              setInvoiceData({ ...invoiceData, customer: e.target.value })
            }
          />
          <input
            type="date"
            className="border p-2 rounded w-full"
            value={invoiceData.date}
            onChange={(e) =>
              setInvoiceData({ ...invoiceData, date: e.target.value })
            }
          />
          <select
            className="border p-2 rounded w-full"
            value={invoiceData.status}
            onChange={(e) =>
              setInvoiceData({ ...invoiceData, status: e.target.value })
            }
          >
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
          </select>
        </div>

        {/* Items Table */}
        <div className="overflow-x-auto mb-4">
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3 border">Description</th>
                <th className="p-3 border">Quantity</th>
                <th className="p-3 border">Price</th>
                <th className="p-3 border text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.items.map((item, index) => (
                <tr key={index} className="border hover:bg-gray-100">
                  <td className="p-3 border">
                    <input
                      type="text"
                      className="border p-1 rounded w-full"
                      value={item.description}
                      onChange={(e) => {
                        const newItems = [...invoiceData.items];
                        newItems[index].description = e.target.value;
                        setInvoiceData({ ...invoiceData, items: newItems });
                      }}
                    />
                  </td>
                  <td className="p-3 border">
                    <input
                      type="number"
                      className="border p-1 rounded w-20"
                      value={item.qty}
                      onChange={(e) => {
                        const newItems = [...invoiceData.items];
                        newItems[index].qty = Number(e.target.value);
                        setInvoiceData({ ...invoiceData, items: newItems });
                      }}
                    />
                  </td>
                  <td className="p-3 border">
                    <input
                      type="number"
                      className="border p-1 rounded w-24"
                      value={item.price}
                      onChange={(e) => {
                        const newItems = [...invoiceData.items];
                        newItems[index].price = Number(e.target.value);
                        setInvoiceData({ ...invoiceData, items: newItems });
                      }}
                    />
                  </td>
                  <td className="p-3 border text-center">
                    <button
                      onClick={() => removeItem(index)}
                      className="text-red-600 hover:scale-110 duration-200"
                    >
                      <FiTrash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          onClick={addItem}
          className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
        >
          <FiPlus /> Add Item
        </button>

        <p className="text-right font-semibold mb-4">
          Total: {calculateTotal(invoiceData.items)} ৳
        </p>

        <button
          onClick={handleSaveInvoice}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center gap-2"
        >
          <FiSave /> {editId ? "Save Changes" : "Generate Invoice"}
        </button>
      </div>

      {/* Invoice List */}
      <div className="overflow-x-auto bg-white rounded-lg shadow mb-6">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Customer</th>
              <th className="p-3 border">Date</th>
              <th className="p-3 border">Total</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.map((invoice) => (
              <tr key={invoice.id} className="border hover:bg-gray-100">
                <td className="p-3 border">{invoice.id}</td>
                <td className="p-3 border">{invoice.customer}</td>
                <td className="p-3 border">{invoice.date}</td>
                <td className="p-3 border">{calculateTotal(invoice.items)} ৳</td>
                <td
                  className={`p-3 border font-semibold ${
                    invoice.status === "Paid" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {invoice.status}
                </td>
                <td className="p-3 border flex justify-center gap-2">
                  <button
                    onClick={() => handleEditInvoice(invoice)}
                    className="text-yellow-600 hover:scale-110 duration-200"
                  >
                    <FiEdit size={20} />
                  </button>
                  <button
                    onClick={() => handleDeleteInvoice(invoice.id)}
                    className="text-red-600 hover:scale-110 duration-200"
                  >
                    <FiTrash2 size={20} />
                  </button>
                  <button
                    onClick={() => toggleStatus(invoice.id)}
                    className="text-blue-600 hover:scale-110 duration-200"
                  >
                    <FiCheckSquare size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceComponents;
