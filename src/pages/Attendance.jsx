import { useState } from "react";
import "./Attendance.css";

function Attendance() {

  const students = [
    {
      id: "PPS001",
      name: "Rahul Kumar",
      class: "10",
      section: "A",
    },
    {
      id: "PPS002",
      name: "Aman Singh",
      class: "10",
      section: "A",
    },
    {
      id: "PPS003",
      name: "Priya Sharma",
      class: "10",
      section: "B",
    },
    {
      id: "PPS004",
      name: "Rohit Kumar",
      class: "9",
      section: "A",
    },
  ];

  const [attendance, setAttendance] = useState({});
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");

  const handleAttendance = (studentId, status) => {

    setAttendance((prev) => ({
      ...prev,
      [studentId]: status,
    }));

  };

  const saveAttendance = () => {

    console.log("Attendance Data:");
    console.log(attendance);

    alert("Attendance Saved Successfully!");

  };

  const filteredStudents = students.filter((student) => {

    const classMatch =
      selectedClass === "" ||
      student.class === selectedClass;

    const sectionMatch =
      selectedSection === "" ||
      student.section === selectedSection;

    return classMatch && sectionMatch;

  });

  return (
    <div className="attendance-container">

      <h1>Attendance Management</h1>

      <div className="attendance-filters">

        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="">Select Class</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <select
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
        >
          <option value="">Select Section</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>

        <input type="date" />

      </div>

      <table>

        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Section</th>
            <th>Present</th>
            <th>Absent</th>
          </tr>
        </thead>

        <tbody>

          {filteredStudents.map((student) => (

            <tr key={student.id}>

              <td>{student.id}</td>

              <td>{student.name}</td>

              <td>{student.class}</td>

              <td>{student.section}</td>

              <td>
                <input
                  type="radio"
                  name={student.id}
                  onChange={() =>
                    handleAttendance(student.id, "Present")
                  }
                />
              </td>

              <td>
                <input
                  type="radio"
                  name={student.id}
                  onChange={() =>
                    handleAttendance(student.id, "Absent")
                  }
                />
              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <button
        className="save-attendance"
        onClick={saveAttendance}
      >
        Save Attendance
      </button>

    </div>
  );
}

export default Attendance;