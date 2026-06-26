import { useState, useEffect } from "react";
import axios from "axios";

function Facilities() {
  const [facilities, setFacilities] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    status: "Available",
  });

  useEffect(() => {
    fetchFacilities();
  }, []);

  const fetchFacilities = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/facilities"
      );

      setFacilities(response.data);
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

  const handleAddFacility = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/facilities",
        formData
      );

      fetchFacilities();

      setFormData({
        name: "",
        status: "Available",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/facilities/${id}`
      );

      fetchFacilities();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Facilities Management</h2>

      <div className="card shadow mb-4">
        <div className="card-body">
          <h5>Add Facility</h5>

          <div className="row">
            <div className="col-md-5">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Facility Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4">
              <select
                name="status"
                className="form-control"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Available">Available</option>
                <option value="Maintenance">Maintenance</option>
              </select>
            </div>

            <div className="col-md-3">
              <button
                className="btn btn-primary w-100"
                onClick={handleAddFacility}
              >
                Add Facility
              </button>
            </div>
          </div>
        </div>
      </div>
           <div className="row">
        {facilities.length > 0 ? (
          facilities.map((facility) => (
            <div className="col-md-4 mb-3" key={facility._id}>
              <div className="card shadow">
                <div className="card-body text-center">
                  <h4>{facility.name}</h4>

                  <p>
                    <strong>Status:</strong> {facility.status}
                  </p>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      handleDelete(facility._id)
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-info">
              No Facilities Found
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Facilities; 