import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        background: "#1e293b",
        color: "white",
        padding: "20px",
      }}
    >
      <h3>Smart Society</h3>
      <hr />

      <Link
        to="/dashboard"
        className="d-block text-white text-decoration-none mb-3"
      >
        Dashboard
      </Link>

      <Link
        to="/residents"
        className="d-block text-white text-decoration-none mb-3"
      >
        Residents
      </Link>

      <Link
        to="/visitors"
        className="d-block text-white text-decoration-none mb-3"
      >
        Visitors
      </Link>

      <Link
        to="/complaints"
        className="d-block text-white text-decoration-none mb-3"
      >
        Complaints
      </Link>

      <Link
        to="/bills"
        className="d-block text-white text-decoration-none mb-3"
      >
        Bills
      </Link>

      <Link
        to="/facilities"
        className="d-block text-white text-decoration-none mb-3"
      >
        Facilities
      </Link>

      <Link
        to="/notices"
        className="d-block text-white text-decoration-none mb-3"
      >
        Notices
      </Link>

      <Link
    to="/reports"
     className="d-block text-white text-decoration-none mb-3"
    >
      Reports
    </Link>

     <Link
    to="/polls"
    className="d-block text-white text-decoration-none mb-3"
    >
     Polls
    </Link>

    <Link
   to="/notifications"
   className="d-block text-white text-decoration-none mb-3"
  >
   Notifications
   </Link>

   <Link
   to="/flats"
   className="d-block text-white text-decoration-none mb-3"
   >
   Flats
   </Link>
    </div>
  );
}

export default Sidebar;