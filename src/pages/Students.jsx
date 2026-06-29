import { useState } from "react";
import "./Students.css";

function Students() {

  const [showForm, setShowForm] = useState(false);

  return (

    <div className="container">

      <h1>Students Management</h1>

      <button
        className="add-btn"
        onClick={() => setShowForm(true)}
      >
        Add Student
      </button>

      {
        showForm && (

          <div className="form-box">

            <h2>Add Student</h2>

            <input type="text" placeholder="Student ID" />

            <input type="text" placeholder="Student Name" />

            <input type="text" placeholder="Father Name" />

            <input type="text" placeholder="Mother Name" />

            <input type="text" placeholder="Class" />

            <input type="text" placeholder="Section" />

            <input type="text" placeholder="Roll Number" />

            <input type="text" placeholder="Mobile Number" />

            <input type="text" placeholder="Address" />

            <br />
            <br />

            <button className="save-btn">
              Save
            </button>

            <button
              className="cancel-btn"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>

          </div>

        )
      }

      <table>

        <thead>

          <tr>

            <th>Student ID</th>

            <th>Name</th>

            <th>Class</th>

            <th>Section</th>

            <th>Roll No</th>

            <th>Mobile</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>PPS001</td>

            <td>Rahul Kumar</td>

            <td>10</td>

            <td>A</td>

            <td>15</td>

            <td>9876543210</td>

            <td>

              <button className="edit-btn">
                Edit
              </button>

              <button className="delete-btn">
                Delete
              </button>

            </td>

          </tr>

        </tbody>

      </table>

    </div>

  );

}

export default Students;