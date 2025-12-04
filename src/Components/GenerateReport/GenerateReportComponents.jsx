import React, { useState } from "react";

const GenerateReportComponents = () => {
  const [reportData, setReportData] = useState({
    reportType: "",
    startDate: "",
    endDate: "",
  });

  const [tableData, setTableData] = useState([]);

  // Example dynamic table (later replace with API)
  const sampleData = [
    { id: 1, name: "John Doe", challan: "CH-001", amount: 500, status: "Paid" },
    { id: 2, name: "Jane Smith", challan: "CH-002", amount: 300, status: "Unpaid" },
    { id: 3, name: "Rahim Uddin", challan: "CH-003", amount: 700, status: "Paid" },
  ];

  const handleGenerate = (e) => {
    e.preventDefault();

    // Sample data loaded – Later replace with Firebase/API query
    setTableData(sampleData);

    alert("Report Ready! Scroll down to Download.");
  };

  const handlePDFDownload = () => {
    const doc = new jsPDF();
    doc.text("Generated Report", 14, 15);

    autoTable(doc, {
      startY: 25,
      head: [["ID", "Client Name", "Challan No", "Amount", "Status"]],
      body: tableData.map((item) => [
        item.id,
        item.name,
        item.challan,
        item.amount,
        item.status,
      ]),
    });

    doc.save("Report.pdf");
  };

  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Report");
    XLSX.writeFile(workbook, "Report.xlsx");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData({ ...reportData, [name]: value });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
        Generate Report
      </h2>

      {/* Report Form */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <form onSubmit={handleGenerate} className="space-y-6">
          {/* Report Type */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Select Report Type
            </label>
            <select
              name="reportType"
              value={reportData.reportType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Choose Report</option>
              <option value="challan">Challan Report</option>
              <option value="client">Client Report</option>
              <option value="payment">Payment Report</option>
              <option value="monthly">Monthly Summary</option>
            </select>
          </div>

          {/* Date Range */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                value={reportData.startDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                value={reportData.endDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>

          {/* Generate Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold 
              hover:bg-blue-700 transition"
          >
            Generate Report
          </button>
        </form>
      </div>

      {/* Table Preview Section */}
      {tableData.length > 0 && (
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            Report Preview
          </h3>

          <div className="overflow-auto">
            <table className="min-w-full border">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-3 border">ID</th>
                  <th className="p-3 border">Client Name</th>
                  <th className="p-3 border">Challan No</th>
                  <th className="p-3 border">Amount</th>
                  <th className="p-3 border">Status</th>
                </tr>
              </thead>

              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id} className="text-center hover:bg-gray-100">
                    <td className="p-3 border">{row.id}</td>
                    <td className="p-3 border">{row.name}</td>
                    <td className="p-3 border">{row.challan}</td>
                    <td className="p-3 border">{row.amount}</td>
                    <td
                      className={`p-3 border font-semibold ${
                        row.status === "Paid"
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col md:flex-row justify-end gap-4 mt-5">
            <button
              onClick={handlePDFDownload}
              className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
            >
              Download PDF
            </button>

            <button
              onClick={handleExcelDownload}
              className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
            >
              Download Excel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenerateReportComponents;
