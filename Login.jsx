import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(to right, #1e3c72, #2a5298)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-5">
                <h2 className="text-center mb-3">
                  Smart Society
                </h2>

                <p className="text-center text-muted mb-4">
                  Society Management System
                </p>

                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label className="form-label">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Password
                    </label>

                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Password"
                      required
                    />
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <div>
                      <input
                        type="checkbox"
                        className="form-check-input me-2"
                      />
                      Remember Me
                    </div>

                    <a href="#">
                      Forgot Password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                  >
                    Login
                  </button>
                </form>

                <p className="text-center mt-4">
                  Don't have an account?
                  <a href="#" className="ms-2">
                    Register
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;