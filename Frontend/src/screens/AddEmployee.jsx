export default function AddEmployee() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          Employee Section
        </h2>

        {/* Add Employee Card */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h4 className="text-lg font-semibold mb-4">Add Employee</h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter employee email"
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <button className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition cursor-pointer">
                Add Employee
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-4">All Employees</h4>

          <div className=" overflow-hidden">
            <table className="w-full border-collapse ">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3 border">Emp ID</th>
                  <th className="p-3 border">Email</th>
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Role</th>
                  <th className="p-3 border text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 border">EMP001</td>
                  <td className="p-3 border">user@email.com</td>
                  <td className="p-3 border">John Doe</td>
                  <td className="p-3 border">Employee</td>
                  <td className="p-3 border text-center">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
