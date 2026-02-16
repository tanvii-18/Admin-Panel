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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-6">Add Employee</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: "Name", name: "name" },
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
                <label className="text-sm font-medium">{field.label}</label>

                <input
                  type={field.type || "text"}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
            >
              {loading ? "Adding..." : "Add Employee"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
