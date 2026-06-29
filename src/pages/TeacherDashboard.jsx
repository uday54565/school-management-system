import TeacherSidebar from "../components/TeacherSidebar";
import Topbar from "../components/Topbar";

function TeacherDashboard() {
  return (
    <div className="dashboard">

      <TeacherSidebar />

      <div className="main-content">

        <Topbar />

        <div className="dashboard-body">

          <h1 className="admin">Welcome Teacher 👋</h1>

          <div className="cards">

            <div className="card">
              <h3>👨‍🎓 My Students</h3>
              <p>120</p>
            </div>

            <div className="card">
              <h3>📅 Attendance</h3>
              <p>85%</p>
            </div>

            <div className="card">
              <h3>📝 Pending Marks</h3>
              <p>12</p>
            </div>

            <div className="card">
              <h3>📢 Notices</h3>
              <p>3</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TeacherDashboard;