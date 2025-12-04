import React, { useState } from "react";
import { FiEdit, FiTrash2, FiSave, FiX, FiPlus } from "react-icons/fi";

const CustomerComponents = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: "Jahidul Islam", email: "jahidul@example.com", phone: "017XXXXXXXX" },
    { id: 2, name: "Rafsan Vai", email: "rafsan@example.com", phone: "018XXXXXXXX" },
  ]);

  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});
  const [newCustomer, setNewCustomer] = useState({ name: "", email: "", phone: "" });

  // Handle Edit
  const handleEdit = (customer) => {
    setEditId(customer.id);
    setEditData({ ...customer });
  };

  // Handle Save
  const handleSave = (id) => {
    setCustomers(customers.map((c) => (c.id === id ? editData : c)));
    setEditId(null);
  };

  // Handle Cancel Edit
  const handleCancel = () => {
    setEditId(null);
  };

  // Handle Delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      setCustomers(customers.filter((c) => c.id !== id));
    }
  };

  // Handle Add New Customer
  const handleAddCustomer = () => {
    if (!newCustomer.name || !newCustomer.email || !newCustomer.phone) {
      alert("Please fill all fields");
      return;
    }
    const newId = customers.length ? Math.max(...customers.map((c) => c.id)) + 1 : 1;
    setCustomers([...customers, { id: newId, ...newCustomer }]);
    setNewCustomer({ name: "", email: "", phone: "" });
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-5">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Customer Management</h2>

      {/* Add New Customer */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Customer Name"
          className="border p-2 rounded w-full md:w-1/4"
          value={newCustomer.name}
          onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded w-full md:w-1/4"
          value={newCustomer.email}
          onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone"
          className="border p-2 rounded w-full md:w-1/4"
          value={newCustomer.phone}
          onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
        />
        <button
          onClick={handleAddCustomer}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2 justify-center"
        >
          <FiPlus /> Add Customer
        </button>
      </div>

      {/* Customer List */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border hover:bg-gray-100">
                {/* ID */}
                <td className="p-3 border">{customer.id}</td>

                {/* Name */}
                <td className="p-3 border">
                  {editId === customer.id ? (
                    <input
                      type="text"
                      className="border p-1 rounded w-full"
                      value={editData.name}
                      onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                    />
                  ) : (
                    customer.name
                  )}
                </td>

                {/* Email */}
                <td className="p-3 border">
                  {editId === customer.id ? (
                    <input
                      type="email"
                      className="border p-1 rounded w-full"
                      value={editData.email}
                      onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                    />
                  ) : (
                    customer.email
                  )}
                </td>

                {/* Phone */}
                <td className="p-3 border">
                  {editId === customer.id ? (
                    <input
                      type="text"
                      className="border p-1 rounded w-full"
                      value={editData.phone}
                      onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                    />
                  ) : (
                    customer.phone
                  )}
                </td>

                {/* Actions */}
                <td className="p-3 border flex justify-center gap-2">
                  {editId === customer.id ? (
                    <>
                      <button
                        onClick={() => handleSave(customer.id)}
                        className="text-green-600 hover:scale-110 duration-200"
                      >
                        <FiSave size={20} />
                      </button>
                      <button
                        onClick={handleCancel}
                        className="text-gray-600 hover:scale-110 duration-200"
                      >
                        <FiX size={20} />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(customer)}
                        className="text-yellow-600 hover:scale-110 duration-200"
                      >
                        <FiEdit size={20} />
                      </button>
                      <button
                        onClick={() => handleDelete(customer.id)}
                        className="text-red-600 hover:scale-110 duration-200"
                      >
                        <FiTrash2 size={20} />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerComponents;
