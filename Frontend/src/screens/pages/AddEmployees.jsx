import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { adminRoutes } from "../../utils/apiRoutes";

export default function AddEmployees() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    emp_id: "",
    joining_date: "",
    salary: "",
    education: "",
    experience: "",
    address: "",
    role: "Employee",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${adminRoutes}/add-employee`, formData, {
        withCredentials: true,
      });

      if (res.data.status) {
        toast.success("Employee added successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
          department: "",
          emp_id: "",
          joining_date: "",
          salary: "",
          education: "",
          experience: "",
          address: "",
          role: "Employee",
        });
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Add New Employee
        </h2>
        <p className="text-gray-500 mb-8">
          Fill in the details below to create a new employee profile.
        </p>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-10">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: "Full Name", name: "name" },
                { label: "Email", name: "email" },
                { label: "Phone", name: "phone" },
                { label: "Employee ID", name: "emp_id" },
                { label: "Department", name: "department" },
                { label: "Joining Date", name: "joining_date", type: "date" },
                { label: "Salary", name: "salary" },
                { label: "Education", name: "education" },
                { label: "Experience", name: "experience" },
                { label: "Address", name: "address" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>

                  <input
                    type={field.type || "text"}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-10">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition shadow-sm cursor-pointer"
              >
                {loading ? "Adding..." : "Add Employee"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
