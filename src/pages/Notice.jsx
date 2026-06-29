import "./Notice.css";

function Notice() {
  return (
    <div className="notice-container">

      <h1>Notice Board</h1>

      <div className="notice-card">
        <h3>Summer Vacation</h3>
        <p>
          School will remain closed from
          June 1 to June 15.
        </p>
      </div>

      <div className="notice-card">
        <h3>Exam Schedule</h3>
        <p>
          Final examinations will start
          from March 10.
        </p>
      </div>

      <div className="notice-card">
        <h3>Parent Meeting</h3>
        <p>
          Parent Teacher Meeting on
          Saturday at 10 AM.
        </p>
      </div>

    </div>
  );
}

export default Notice;