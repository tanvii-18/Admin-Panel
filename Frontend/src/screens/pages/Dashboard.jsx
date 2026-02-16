import Sidebar_dashboard from "./Sidebar-dashboard";
import { useEffect, useState } from "react";
import axios from "axios";
import { adminRoutes } from "../../utils/apiRoutes";

export default function Dashboard() {
  {
    const [stats, setStats] = useState({
      totalEmployees: 0,
      presentToday: 0,
      openPositions: 0,
      headcount: 0,
      newHires: 0,
      turnoverRate: 0,
      projects: 0,
      clients: 0,
      tasks: 0,
      earnings: 0,
      profit: 0,
      applicants: 0,
    });

    useEffect(() => {
      fetchDashboard();
    }, []);

    const fetchDashboard = async () => {
      try {
        const res = await axios.get(`${adminRoutes}/dashboard`, {
          withCredentials: true,
        });

        if (res.data.status) {
          setStats(res.data.data);
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    return (
      <div className="min-h-screen flex bg-gray-100 ">
        <Sidebar_dashboard />

        {/* Main Content */}
        <main className="flex-1 p-1">
          <div className="min-h-screen bg-gray-100 p-6">
            {/* HEADER */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">
                Welcome Back, <span className="text-teal-600">Admin</span>
              </h1>

              <div className="flex gap-10 text-center">
                <div>
                  <p className="text-2xl font-bold">{stats.headcount}</p>
                  <p className="text-sm text-gray-500">Headcount</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.newHires}</p>
                  <p className="text-sm text-gray-500">New Hires</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.turnoverRate}%</p>
                  <p className="text-sm text-gray-500">Turnover Rate</p>
                </div>
              </div>
            </div>

            {/* TOP STATS CARDS */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card title="Total Employees" value={stats.totalEmployees} />
              <Card title="Present Today" value={stats.presentToday} />
              <Card title="Open Positions" value={stats.openPositions} />
            </div>

            {/* SECOND GRID */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card title="Attendance Overview" value="120/154" />
              <Card title="Total Projects" value={stats.projects} />
              <Card title="Total Clients" value={stats.clients} />
              <Card title="Total Tasks" value={stats.tasks} />
              <Card title="Earnings" value={`$${stats.earnings}`} />
              <Card title="Profit This Week" value={`$${stats.profit}`} />
              <Card title="Job Applicants" value={stats.applicants} />
              <Card title="New Hire" value={`${stats.newHires}`} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

function Card({ title, value }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
      <p className="text-gray-500 text-sm mb-2">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}
