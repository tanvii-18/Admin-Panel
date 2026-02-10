import { toast } from "sonner";
import { adminRoutes } from "../utils/apiRoutes";
import { useState } from "react";

export default function Profile() {
  const [currentUser, setCurrentUser] = useState({});

  const getCurrentUser = () => {
    try {
    } catch (error) {
      toast.error(res.data.message);
    }
  };

  const handleUpdateProfile = () => {
    try {
      const res = `${api / adminRoutes}/update-admin-profile`;
      console.log(res.data);
      toast.success("Profile Updated Successfully!");
    } catch (error) {
      toast.error(res.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Profile Page</h2>

      {/* Profile Image */}
      <div className="flex justify-center mb-8 cursor-pointer">
        <div className="h-40 w-40 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-gray-600 text-sm">Profile Photo</span>
        </div>
      </div>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        {/* Email + Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="text"
              disabled
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
        </div>

        {/* Employee ID + Role */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Employee ID
            </label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
        </div>

        {/* Joining Date + Salary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Joining Date
            </label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Salary</label>
            <input type="number" className="w-full p-2 border rounded" />
          </div>
        </div>

        {/* Education + Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Education</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Experience</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
        </div>

        {/* Department + Phone + Address */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Department</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button
            className="bg-gray-800 text-white px-8 py-2 rounded hover:bg-gray-700 transition cursor-pointer"
            onClick={handleUpdateProfile}
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}
