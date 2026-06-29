import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
// import Dashboard from "../components/Dashboard";
import "./Dashboard.css";

function AdminDashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Topbar />

        <div className="dashboard-body">

          <h1 className="admin">Welcome Admin 👋</h1>

          <div className="cards">

            <div className="card">
              <h3>🎓 Students</h3>
              <p>500</p>
            </div>

            <div className="card">
              <h3>👨‍🏫 Teachers</h3>
              <p>30</p>
            </div>

            <div className="card">
              <h3>📅 Attendance</h3>
              <p>92%</p>
            </div>

            <div className="card">
              <h3>💰 Fee Due</h3>
              <p>₹1,20,000</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;