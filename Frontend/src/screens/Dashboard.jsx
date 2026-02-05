import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
        <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>

        <div className="flex gap-6 text-gray-600 font-medium">
          <Link to="/profile" className="hover:text-blue-600 transition">
            Profile
          </Link>
          <Link to="/add-employee" className="hover:text-blue-600 transition">
            Add Employee
          </Link>
        </div>
      </nav>

      {/* Page Content */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
