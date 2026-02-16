import { toast } from "sonner";
import { adminRoutes, authRoutes } from "../../utils/apiRoutes";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [currentUser, setCurrentUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    try {
      const res = await axios.get(`${authRoutes}/getCurrentUser`, {
        withCredentials: true,
      });

      if (res.data.status && res.data.user) {
        const updatedUser = res.data.user;

        setCurrentUser(updatedUser);
        setProfile({ ...updatedUser });
        setIsEditing(false);
      } else {
        toast.error("No user returned from server");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.put(
        `${adminRoutes}/update-admin-profile`,
        {
          name: profile.name,
          phone: profile.phone,
          department: profile.department,
          address: profile.address,
          education: profile.education,
          experience: profile.experience,
        },
        { withCredentials: true },
      );

      if (res.data.status) {
        toast.success("Profile updated successfully");

        const updatedUser = res.data.user;

        setCurrentUser(updatedUser);
        setProfile({ ...updatedUser });

        setIsEditing(false);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  if (!profile) return <div className="p-6">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* LEFT CARD */}
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex flex-col items-center">
            <div className="h-32 w-32 rounded-full bg-gray-300 mb-4 flex items-center justify-center text-4xl font-bold">
              {profile.name?.charAt(0)}
            </div>

            {isEditing ? (
              <input
                name="name"
                value={profile.name || ""}
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
        </div>

        {/* RIGHT SECTION */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow p-6">
          <form onSubmit={handleUpdateProfile}>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "Email", name: "email", disabled: true },
                { label: "Phone", name: "phone" },
                { label: "Department", name: "department" },
                { label: "Education", name: "education" },
                { label: "Experience", name: "experience" },
                { label: "Address", name: "address" },
              ].map((item) => (
                <div key={item.name}>
                  <label className="text-sm font-medium">{item.label}</label>

                  {isEditing && !item.disabled ? (
                    <input
                      name={item.name}
                      value={profile[item.name] || ""}
                      onChange={handleChange}
                      className="w-full mt-1 border rounded px-2 py-1"
                    />
                  ) : (
                    <p className="mt-1 text-gray-600">{profile[item.name]}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-4 mt-6">
              {isEditing ? (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                      setProfile({ ...currentUser });
                    }}
                    className="px-6 py-2 bg-gray-300 rounded-lg"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                  >
                    {loading ? "Updating..." : "Update Profile"}
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
