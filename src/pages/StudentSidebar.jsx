import { Link } from "react-router-dom";

function StudentSidebar() {
  return (

    <div className="sidebar">

      <h2>PPS</h2>

      <Link to="/student">
        🏠 Dashboard
      </Link>

      <Link to="/my-attendance">
        📅 My Attendance
      </Link>

      <Link to="/my-marks">
        📝 My Marks
      </Link>

      <Link to="/my-fees">
        💰 My Fees
      </Link>

      <Link to="/notice">
        📢 Notices
      </Link>

      <Link to="/profile">
        👤 My Profile
      </Link>

      <Link to="/">
        🚪 Logout
      </Link>

    </div>

  );
}

export default StudentSidebar;