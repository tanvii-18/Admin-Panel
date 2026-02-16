import React, { useEffect, useState } from "react";
import { Plus, Upload, Search, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { adminRoutes } from "../../utils/apiRoutes";

export default function AllEmployees() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Fetch Employees
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get(`${adminRoutes}/get-all-users`);
      setEmployees(res.data.users);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  // Delete Employee
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?",
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`${adminRoutes}/delete-user${id}`);
      setEmployees(employees.filter((emp) => emp._id !== id));
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  // Search Filter
  const filteredEmployees = employees.filter((emp) =>
    (emp.name || "").toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-semibold">
            Employees ({employees.length})
          </h2>
          <p className="text-gray-500 text-sm">
            All the employees of the company are listed here
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/add-employee")}
            className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            <Plus size={16} />
            Add New Employee
          </button>
        </div>
      </div>

      {/* SEARCH */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center bg-white border rounded-lg px-3 py-2 w-full md:w-96">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 outline-none w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* EMPLOYEE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredEmployees.map((emp) => (
          <div
            key={emp._id}
            className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
          >
            {/* Profile */}
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-gray-300" />
              <div>
                <h3 className="font-semibold">{emp.name}</h3>
                <p className="text-sm text-gray-500">{emp.role}</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex gap-2 mb-3">
              <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                {emp.department}
              </span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {emp.type}
              </span>
            </div>

            {/* Details */}
            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <span className="font-medium">Emp Code:</span> {emp.empCode}
              </p>
              <p>
                <span className="font-medium">Joining Date:</span>{" "}
                {emp.joiningDate}
              </p>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => navigate(`/edit-employee/${emp._id}`)}
                className="text-blue-600 hover:text-blue-800"
              >
                <Pencil size={18} />
              </button>

              <button
                onClick={() => handleDelete(emp._id)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
