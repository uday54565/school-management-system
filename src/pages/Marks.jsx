import "./Marks.css";

function Marks() {
  return (

    <div className="marks-container">

      <h1>Marks Management</h1>

      <div className="marks-form">

        <input
          type="text"
          placeholder="Student ID"
        />

        <input
          type="text"
          placeholder="Student Name"
        />

        <input
          type="number"
          placeholder="Marks"
        />

        <button>
          Save Marks
        </button>

      </div>

      <table>

        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Marks</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>PPS001</td>
            <td>Rahul Kumar</td>
            <td>85</td>
          </tr>

          <tr>
            <td>PPS002</td>
            <td>Aman Singh</td>
            <td>78</td>
          </tr>

        </tbody>

      </table>

    </div>

  );
}

export default Marks;