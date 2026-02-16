import React, { useState } from "react";

export const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([
    {
      id: 1,
      empId: "EMP001",
      name: "Rahul Sharma",
      date: "2026-02-16",
      status: "Present",
      checkIn: "09:05 AM",
      checkOut: "06:30 PM",
      hours: "9.5",
    },
    {
      id: 2,
      empId: "EMP002",
      name: "Priya Patel",
      date: "2026-02-16",
      status: "Present",
      checkIn: "09:15 AM",
      checkOut: "06:45 PM",
      hours: "9.3",
    },
    {
      id: 3,
      empId: "EMP003",
      name: "Amit Verma",
      date: "2026-02-16",
      status: "Absent",
      checkIn: "-",
      checkOut: "-",
      hours: "0",
    },
    {
      id: 4,
      empId: "EMP004",
      name: "Sneha Mehta",
      date: "2026-02-16",
      status: "Half Day",
      checkIn: "10:30 AM",
      checkOut: "02:45 PM",
      hours: "4.2",
    },
    {
      id: 5,
      empId: "EMP005",
      name: "Vikas Gupta",
      date: "2026-02-15",
      status: "Present",
      checkIn: "08:55 AM",
      checkOut: "07:10 PM",
      hours: "10.2",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedDate, setSelectedDate] = useState("2026-02-16");

  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Filter data
  const filteredData = attendanceData
    .filter((item) => item.date === selectedDate)
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.empId.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter((item) => filterStatus === "All" || item.status === filterStatus);

  // Stats
  const totalPresent = filteredData.filter(
    (item) => item.status === "Present",
  ).length;
  const totalAbsent = filteredData.filter(
    (item) => item.status === "Absent",
  ).length;
  const totalHalf = filteredData.filter(
    (item) => item.status === "Half Day",
  ).length;

  const openMarkModal = (emp) => {
    setSelectedEmployee(emp);
    setShowModal(true);
  };

  const markAttendance = (newStatus) => {
    if (!selectedEmployee) return;

    const updatedData = attendanceData.map((item) => {
      if (item.id === selectedEmployee.id) {
        return {
          ...item,
          status: newStatus,
          checkIn: newStatus === "Absent" ? "-" : "09:00 AM",
          checkOut: newStatus === "Absent" ? "-" : "06:00 PM",
          hours: newStatus === "Absent" ? "0" : "9",
        };
      }
      return item;
    });

    setAttendanceData(updatedData);
    setShowModal(false);
    setSelectedEmployee(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Employee Attendance
            </h1>
            <p className="text-gray-600 mt-1">
              Manage daily attendance • {selectedDate}
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Total Present</p>
            <p className="text-4xl font-bold text-green-600 mt-2">
              {totalPresent}
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Absent</p>
            <p className="text-4xl font-bold text-red-600 mt-2">
              {totalAbsent}
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Half Day</p>
            <p className="text-4xl font-bold text-yellow-600 mt-2">
              {totalHalf}
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Attendance %</p>
            <p className="text-4xl font-bold text-blue-600 mt-2">
              {filteredData.length
                ? ((totalPresent / filteredData.length) * 100).toFixed(1)
                : 0}
              %
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-2xl shadow-sm mb-6 flex flex-wrap gap-4 items-center">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Search employee name or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 min-w-[250px] border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
          />

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
          >
            <option value="All">All Status</option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
            <option value="Half Day">Half Day</option>
          </select>
        </div>

        {/* Attendance Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="text-left py-5 px-6 font-semibold text-gray-700">
                  Employee
                </th>
                <th className="text-left py-5 px-6 font-semibold text-gray-700">
                  Date
                </th>
                <th className="text-left py-5 px-6 font-semibold text-gray-700">
                  Status
                </th>
                <th className="text-left py-5 px-6 font-semibold text-gray-700">
                  Check In
                </th>
                <th className="text-left py-5 px-6 font-semibold text-gray-700">
                  Check Out
                </th>
                <th className="text-left py-5 px-6 font-semibold text-gray-700">
                  Hours
                </th>
                <th className="text-center py-5 px-6 font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredData.length > 0 ? (
                filteredData.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50 transition">
                    <td className="py-5 px-6">
                      <div>
                        <p className="font-medium">{record.name}</p>
                        <p className="text-sm text-gray-500">{record.empId}</p>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-gray-600">{record.date}</td>
                    <td className="py-5 px-6">
                      <span
                        className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium
                        ${record.status === "Present" ? "bg-green-100 text-green-700" : ""}
                        ${record.status === "Absent" ? "bg-red-100 text-red-700" : ""}
                        ${record.status === "Half Day" ? "bg-yellow-100 text-yellow-700" : ""}`}
                      >
                        {record.status}
                      </span>
                    </td>
                    <td className="py-5 px-6 text-gray-600">
                      {record.checkIn}
                    </td>
                    <td className="py-5 px-6 text-gray-600">
                      {record.checkOut}
                    </td>
                    <td className="py-5 px-6 font-medium">
                      {record.hours} hrs
                    </td>
                    <td className="py-5 px-6 text-center">
                      <button
                        onClick={() => openMarkModal(record)}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        Mark / Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-12 text-gray-500">
                    No attendance records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mark Attendance Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">
              {selectedEmployee
                ? `Mark Attendance - ${selectedEmployee.name}`
                : "Mark Attendance"}
            </h2>

            <div className="space-y-4">
              <button
                onClick={() => markAttendance("Present")}
                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-semibold transition"
              >
                Mark Present
              </button>
              <button
                onClick={() => markAttendance("Absent")}
                className="w-full py-4 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-semibold transition"
              >
                Mark Absent
              </button>
              <button
                onClick={() => markAttendance("Half Day")}
                className="w-full py-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-2xl font-semibold transition"
              >
                Mark Half Day
              </button>
            </div>

            <button
              onClick={() => {
                setShowModal(false);
                setSelectedEmployee(null);
              }}
              className="mt-6 w-full py-3 text-gray-500 hover:text-gray-700 font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
