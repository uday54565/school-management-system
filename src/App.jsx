import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Attendance from "./pages/Attendance";
import Fees from "./pages/Fees";
import Exams from "./pages/Exams";
import Notice from "./pages/Notice";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import Marks from "./pages/Marks";

function App() {
  return (
    <BrowserRouter>
      <Routes>

         <Route path="/student" element={<StudentDashboard />}

         path="/marks" element={<Marks />}
/>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/about" element={<About />} />

        <Route path="/students" element={<Students />} />

        <Route path="/teachers" element={<Teachers />} />

        <Route path="/attendance" element={<Attendance />} />

        <Route path="/fees" element={<Fees />} />

        <Route path="/exams" element={<Exams />} />

        <Route path="/notice" element={<Notice />} />
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/teacher" element={<TeacherDashboard />} />

        <Route path="/student" element={<StudentDashboard />} />

        <Route path="/students" element={<Students />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;