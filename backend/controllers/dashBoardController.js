import { Dashboard } from "../models/dashboardModel.js";

// GET dashboard stats
export const getDashboard = async (req, res) => {
  try {
    const stats = await Dashboard.findOne();
    if (!stats) return res.json({ status: false, message: "No data found" });

    res.json({ status: true, data: stats });
  } catch (err) {
    console.log(err);
    res.json({ status: false, message: "Server error" });
  }
};

// POST to create dashboard (optional, can call once)
export const createDashboard = async (req, res) => {
  try {
    const existing = await Dashboard.findOne();
    if (existing)
      return res.json({ status: false, message: "Dashboard already exists" });

    const doc = new Dashboard({
      totalEmployees: 50,
      presentToday: 45,
      openPositions: 5,
      headcount: 50,
      newHires: 2,
      turnoverRate: 5,
      projects: 12,
      clients: 8,
      tasks: 20,
      earnings: 10000,
      profit: 2000,
      applicants: 15,
    });

    await doc.save();
    res.json({ status: true, data: doc });
  } catch (err) {
    console.log(err);
    res.json({ status: false, message: "Server error" });
  }
};
