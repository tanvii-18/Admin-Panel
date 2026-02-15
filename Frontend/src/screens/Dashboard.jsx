import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-blue-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h1 className="text-xl font-semibold mb-6">Dashboard</h1>

        <div className="flex flex-col gap-4 text-gray-700 font-medium">
          <Link to="/dashboard" className="hover:text-blue-600 transition">
            Overview
          </Link>

          <Link to="/employees" className="hover:text-blue-600 transition">
            All Employees
          </Link>

          <Link to="/add-employee" className="hover:text-blue-600 transition">
            Add Employee
          </Link>

          <Link to="/applicants" className="hover:text-blue-600 transition">
            Job Applicants
          </Link>

          <Link to="/projects" className="hover:text-blue-600 transition">
            Projects
          </Link>

          <Link to="/attendance" className="hover:text-blue-600 transition">
            Attendance Overview
          </Link>
        </div>

        <div>
          <Link to="/profile" className="hover:text-blue-600 transition">
            Profile
          </Link>
          <button>Logout</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1>Admin Dashboard</h1>
        {/* Tasks Statistics */}
      </main>
    </div>
  );
}
