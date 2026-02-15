import { toast } from "sonner";
import { adminRoutes, authRoutes } from "../../utils/apiRoutes";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  useEffect(() => {
    getCurrentUser();
  }, []);

  const [currentUser, setCurrentUser] = useState({});

  const getCurrentUser = async () => {
    try {
      const res = await axios.get(`${authRoutes}/getCurrentUser`, {
        withCredential: true,
      });

      if (res.data.status) {
        setCurrentUser(res.data.user.user);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "George Arafat",
    employeeId: "84739234",
    role: "Junior Technician",
    email: currentUser?.email || "hello@george.com",
    phone: "+33254483540",
    department: "Technical",
    joiningDate: "2022-05-12",
    salary: "5000",
    education: "Electrical Engineering",
    experience: "3 Years",
    address: "729 Luxury House King's Garden",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = () => {
    console.log("Updated Data:", profile);
    setIsEditing(false);
    alert("Profile Updated Successfully ✅");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* LEFT PROFILE CARD */}
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex flex-col items-center">
            <div className="h-32 w-32 rounded-full bg-gray-300 mb-4 flex items-center justify-center text-gray-600">
              Profile
            </div>

            {isEditing ? (
              <input
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="text-xl font-semibold text-center border rounded px-2 py-1"
              />
            ) : (
              <h2 className="text-xl font-semibold">{profile.name}</h2>
            )}

            <p className="text-sm text-blue-500 mt-1">{profile.role}</p>
            <p className="text-gray-500 text-sm mt-1">
              ID: {profile.employeeId}
            </p>
          </div>

          <div className="mt-6 space-y-3 text-sm">
            <div>
              <span className="font-medium">Email:</span>
              <p>{profile.email}</p>
            </div>

            <div>
              <span className="font-medium">Phone:</span>
              {isEditing ? (
                <input
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="w-full border rounded px-2 py-1 mt-1"
                />
              ) : (
                <p>{profile.phone}</p>
              )}
            </div>

            <div>
              <span className="font-medium">Department:</span>
              {isEditing ? (
                <input
                  name="department"
                  value={profile.department}
                  onChange={handleChange}
                  className="w-full border rounded px-2 py-1 mt-1"
                />
              ) : (
                <p>{profile.department}</p>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="md:col-span-2 space-y-6">
          {/* PROFESSIONAL INFO */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4">
              Professional Information
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "Joining Date", name: "joiningDate" },
                { label: "Salary", name: "salary" },
                { label: "Education", name: "education" },
                { label: "Experience", name: "experience" },
                { label: "Address", name: "address" },
              ].map((item) => (
                <div key={item.name}>
                  <label className="text-sm font-medium">{item.label}</label>

                  {isEditing ? (
                    <input
                      type="text"
                      name={item.name}
                      value={profile[item.name]}
                      onChange={handleChange}
                      className="w-full mt-1 border rounded px-2 py-1"
                    />
                  ) : (
                    <p className="mt-1 text-gray-600">{profile[item.name]}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex justify-end gap-4">
            {isEditing ? (
              <>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2 bg-gray-300 rounded-lg"
                >
                  Cancel
                </button>

                <button
                  onClick={handleUpdateProfile}
                  className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                >
                  Update Profile
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
