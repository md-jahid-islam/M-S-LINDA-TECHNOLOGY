import React, { useState } from "react";

const SettingsComponents = () => {
  const [logo, setLogo] = useState(null);
  const [businessInfo, setBusinessInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [paymentInfo, setPaymentInfo] = useState({
    bankName: "",
    accountNumber: "",
    paypalEmail: "",
  });

  // Handle Logo Upload
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };

  // Handle Business Info Save
  const handleBusinessSave = () => {
    console.log("Business Info Saved:", businessInfo);
    alert("Business Info Updated Successfully!");
  };

  // Handle Payment Info Save
  const handlePaymentSave = () => {
    console.log("Payment Info Saved:", paymentInfo);
    alert("Payment Info Updated Successfully!");
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-5">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Settings</h2>

      {/* Logo Upload */}
      <section className="mb-8 p-5 bg-white rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-4">Logo Upload</h3>
        <div className="flex items-center gap-4">
          {logo && (
            <img
              src={logo}
              alt="Logo Preview"
              className="w-24 h-24 object-contain border rounded"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="border p-2 rounded"
          />
        </div>
      </section>

      {/* Business Info */}
      <section className="mb-8 p-5 bg-white rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-4">Business Info</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Business Name"
            className="border p-2 rounded w-full"
            value={businessInfo.name}
            onChange={(e) =>
              setBusinessInfo({ ...businessInfo, name: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded w-full"
            value={businessInfo.email}
            onChange={(e) =>
              setBusinessInfo({ ...businessInfo, email: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Phone"
            className="border p-2 rounded w-full"
            value={businessInfo.phone}
            onChange={(e) =>
              setBusinessInfo({ ...businessInfo, phone: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Address"
            className="border p-2 rounded w-full"
            value={businessInfo.address}
            onChange={(e) =>
              setBusinessInfo({ ...businessInfo, address: e.target.value })
            }
          />
        </div>
        <button
          onClick={handleBusinessSave}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Business Info
        </button>
      </section>

      {/* Payment Info */}
      <section className="mb-8 p-5 bg-white rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-4">Payment Info</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Bank Name"
            className="border p-2 rounded w-full"
            value={paymentInfo.bankName}
            onChange={(e) =>
              setPaymentInfo({ ...paymentInfo, bankName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Account Number"
            className="border p-2 rounded w-full"
            value={paymentInfo.accountNumber}
            onChange={(e) =>
              setPaymentInfo({ ...paymentInfo, accountNumber: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="PayPal Email"
            className="border p-2 rounded w-full"
            value={paymentInfo.paypalEmail}
            onChange={(e) =>
              setPaymentInfo({ ...paymentInfo, paypalEmail: e.target.value })
            }
          />
        </div>
        <button
          onClick={handlePaymentSave}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save Payment Info
        </button>
      </section>
    </div>
  );
};

export default SettingsComponents;
