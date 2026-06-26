function Reports() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Society Reports</h2>

      <div className="row g-3">

        <div className="col-md-3">
          <div className="card shadow text-center">
            <div className="card-body">
              <h5>Total Residents</h5>
              <h2>250</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow text-center">
            <div className="card-body">
              <h5>Total Visitors</h5>
              <h2>45</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow text-center">
            <div className="card-body">
              <h5>Total Complaints</h5>
              <h2>12</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow text-center">
            <div className="card-body">
              <h5>Total Revenue</h5>
              <h2>₹1,20,000</h2>
            </div>
          </div>
        </div>

      </div>

      <div className="card shadow mt-4">
        <div className="card-body">
          <h4>Monthly Report Summary</h4>
          <p>Total Residents Registered : 250</p>
          <p>Total Visitors Entered : 45</p>
          <p>Pending Complaints : 5</p>
          <p>Resolved Complaints : 7</p>
          <p>Total Maintenance Collection : ₹1,20,000</p>
        </div>
      </div>
    </div>
  );
}

export default Reports;