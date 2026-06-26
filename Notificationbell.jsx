function NotificationBell() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Notifications</h2>

      <div className="card shadow mb-3">
        <div className="card-body">
          <h5>Visitor Approval Request</h5>
          <p>Mohit Sharma wants to visit Flat A-101.</p>
        </div>
      </div>

      <div className="card shadow mb-3">
        <div className="card-body">
          <h5>Complaint Update</h5>
          <p>Lift Maintenance complaint marked as Resolved.</p>
        </div>
      </div>

      <div className="card shadow mb-3">
        <div className="card-body">
          <h5>Payment Reminder</h5>
          <p>Maintenance bill due on 30th June.</p>
        </div>
      </div>
    </div>
  );
}

export default NotificationBell;