import { useState, useEffect } from "react";
import axios from "axios";

function Residents() {
  const [residents, setResidents] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    flatNo: "",
    mobile: "",
    status: "",
  });

  useEffect(() => {
    fetchResidents();
  }, []);

  const fetchResidents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/residents"
      );

      setResidents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddResident = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/residents",
        formData
      );

      fetchResidents();

      setFormData({
        name: "",
        flatNo: "",
        mobile: "",
        status: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

const handleDelete = async (id) => {
  try {
    await axios.delete(
      `http://localhost:5000/api/residents/${id}`
    );

    fetchResidents();
  } catch (error) {
    console.log(error);
  }
};
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Residents Management</h2>

      <div className="card shadow mb-4">
        <div className="card-body">
          <h5>Add Resident</h5>

          <div className="row">
            <div className="col-md-3">
              <input
                type="text"
                name="name"
                placeholder="Resident Name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-3">
              <input
                type="text"
                name="flatNo"
                placeholder="Flat No"
                className="form-control"
                value={formData.flatNo}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-3">
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                className="form-control"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-2">
              <select
                name="status"
                className="form-control"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Owner">Owner</option>
                <option value="Tenant">Tenant</option>
              </select>
            </div>

            <div className="col-md-1">
              <button
                className="btn btn-primary"
                onClick={handleAddResident}
              >
                Add
              </button>


            </div>
          </div>
        </div>
      </div>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Flat No</th>
            <th>Mobile</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {residents.length > 0 ? (
            residents.map((resident, index) => (
              <tr key={resident._id}>
                <td>{index + 1}</td>
                <td>{resident.name}</td>
                <td>{resident.flatNo}</td>
                <td>{resident.mobile}</td>s
                <td>{resident.status}</td>
                <td>{resident.status}</td>
            <td>
             <button
              className="btn btn-danger btn-sm"
               onClick={() => handleDelete(resident._id)}
             >
              Delete
             </button>
            </td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No Residents Found
              </td>

            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Residents;
