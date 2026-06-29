import { Link } from "react-router-dom";

function TeacherSidebar() {
  return (

    <div className="sidebar">

      <h2>PPS</h2>

      <Link to="/teacher">
        🏠 Dashboard
      </Link>

      <Link to="/attendance">
        📅 Attendance
      </Link>

      <Link to="/marks">
        📝 Marks
      </Link>

      <Link to="/students">
        👨‍🎓 Students
      </Link>

      <Link to="/notice">
        📢 Notices
      </Link>

      <Link to="/">
        🚪 Logout
      </Link>

    </div>

  );
}

export default TeacherSidebar;