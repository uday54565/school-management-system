import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2>PPS</h2>

      <Link to="/admin">🏠 Dashboard</Link>
      
      <Link to="/students">🎓 Students</Link>
      
      <Link to="/teachers">👨‍🏫 Teachers</Link>

      <Link to="/attendance">📅 Attendance</Link>

      <Link to="/fees">💳 Fees</Link>

      <Link to="/exams">📝 Exams</Link>

      <Link to="/notice">📢 Notices</Link>

      <Link to="/">🚪 Logout</Link>

    </div>
  );
}

export default Sidebar;