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
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedDate, setSelectedDate] = useState("2026-02-16");

  const filteredData = attendanceData
    .filter((item) => item.date === selectedDate)
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.empId.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter((item) => filterStatus === "All" || item.status === filterStatus);

  const totalPresent = filteredData.filter(
    (item) => item.status === "Present",
  ).length;

  const totalAbsent = filteredData.filter(
    (item) => item.status === "Absent",
  ).length;

  const totalHalf = filteredData.filter(
    (item) => item.status === "Half Day",
  ).length;

  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">
            Employee Attendance
          </h1>
          <p className="text-gray-500 mt-1">
            Manage daily attendance • {selectedDate}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard title="Present" value={totalPresent} color="green" />
          <StatCard title="Absent" value={totalAbsent} color="red" />
          <StatCard title="Half Day" value={totalHalf} color="yellow" />
          <StatCard
            title="Attendance %"
            value={
              filteredData.length
                ? ((totalPresent / filteredData.length) * 100).toFixed(1)
                : 0
            }
            color="blue"
            suffix="%"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border rounded-xl px-4 py-2"
          />

          <input
            type="text"
            placeholder="Search employee..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 border rounded-xl px-4 py-2"
          />

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border rounded-xl px-4 py-2"
          >
            <option value="All">All</option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
            <option value="Half Day">Half Day</option>
          </select>
        </div>

        {/* Table */}
        <div className="border rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Employee</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Check In</th>
                <th className="p-4 text-left">Check Out</th>
                <th className="p-4 text-left">Hours</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="p-4">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.empId}</p>
                    </td>
                    <td className="p-4">{item.status}</td>
                    <td className="p-4">{item.checkIn}</td>
                    <td className="p-4">{item.checkOut}</td>
                    <td className="p-4">{item.hours} hrs</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-8 text-gray-500">
                    No attendance records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, color, suffix }) => {
  const colors = {
    green: "text-green-600",
    red: "text-red-600",
    yellow: "text-yellow-600",
    blue: "text-blue-600",
  };

  return (
    <div className="border rounded-2xl p-6">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className={`text-3xl font-bold mt-2 ${colors[color]}`}>
        {value}
        {suffix}
      </p>
    </div>
  );
};
