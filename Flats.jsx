import { useState, useEffect } from "react";
import axios from "axios";

function Flats() {
  const [flats, setFlats] = useState([]);

  const [formData, setFormData] = useState({
    flatNo: "",
    owner: "",
    status: "Occupied",
  });

  useEffect(() => {
    fetchFlats();
  }, []);

  const fetchFlats = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/flats"
      );

      setFlats(response.data);
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

  const handleAddFlat = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/flats",
        formData
      );

      fetchFlats();

      setFormData({
        flatNo: "",
        owner: "",
        status: "Occupied",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/flats/${id}`
      );

      fetchFlats();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Flat Management</h2>

      <div className="card shadow mb-4">
        <div className="card-body">
          <h5>Add Flat</h5>

          <div className="row">
            <div className="col-md-3">
              <input
                type="text"
                name="flatNo"
                className="form-control"
                placeholder="Flat No"
                value={formData.flatNo}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4">
              <input
                type="text"
                name="owner"
                className="form-control"
                placeholder="Owner Name"
                value={formData.owner}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-3">
              <select
                name="status"
                className="form-control"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Occupied">Occupied</option>
                <option value="Available">Available</option>
              </select>
            </div>

            <div className="col-md-2">
              <button
                className="btn btn-success w-100"
                onClick={handleAddFlat}
              >
                Add Flat
              </button>
            </div>
          </div>
        </div>
      </div>
            <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Flat No</th>
            <th>Owner</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {flats.length > 0 ? (
            flats.map((flat, index) => (
              <tr key={flat._id}>
                <td>{index + 1}</td>
                <td>{flat.flatNo}</td>
                <td>{flat.owner}</td>
                <td>{flat.status}</td>

                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(flat._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No Flats Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Flats;