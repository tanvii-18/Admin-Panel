import Sidebar_dashboard from "./Sidebar-dashboard";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-blue-100 ">
      <Sidebar_dashboard />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1>Admin Dashboard</h1>
        {/* Tasks Statistics */}
      </main>
    </div>
  );
}
