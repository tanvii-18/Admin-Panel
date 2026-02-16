import mongoose from "mongoose";

const dashboardSchema = new mongoose.Schema({
  totalEmployees: { type: Number, default: 0 },
  presentToday: { type: Number, default: 0 },
  openPositions: { type: Number, default: 0 },
  headcount: { type: Number, default: 0 },
  newHires: { type: Number, default: 0 },
  turnoverRate: { type: Number, default: 0 },
  projects: { type: Number, default: 0 },
  clients: { type: Number, default: 0 },
  tasks: { type: Number, default: 0 },
  earnings: { type: Number, default: 0 },
  profit: { type: Number, default: 0 },
  applicants: { type: Number, default: 0 },
});

export const Dashboard = mongoose.model("Dashboard", dashboardSchema);
