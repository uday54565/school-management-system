import StudentSidebar from "./StudentSidebar";
import Topbar from "../components/Topbar";

function StudentDashboard() {
  return (
    <div className="dashboard">

      <StudentSidebar />

      <div className="main-content">

        <Topbar />

        <div className="dashboard-body">

          <h1 className="std">Welcome Student 👋</h1>

          <div className="cards">

            <div className="card">
              <h3>📅 Attendance</h3>
              <p>92%</p>
            </div>

            <div className="card">
              <h3>📝 Average Marks</h3>
              <p>85%</p>
            </div>

            <div className="card">
              <h3>💰 Fee Status</h3>
              <p>Paid</p>
            </div>

            <div className="card">
              <h3>📢 Notices</h3>
              <p>2</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;