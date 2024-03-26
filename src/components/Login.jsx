import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstname: name,
      password: password,
    };

    if (name == " ") {
      setError("Isi Username");
      return;
    } else if (password == " ") {
      setError("Isi Password");
      return;
    }

    try {
      const response = await axios.post("https://fakestoreapi.com/users", data);
      console.log("response", response);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/catalog");
      } else {
        setError("Invalid password");
      }
    } catch (error) {
      console.error("Error login:", error);
      setError("Invalid password");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2 className="text-center">Login</h2>
        {error && <p className="text-danger">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="name"
              className="form-control rounded-0"
              id="name"
              autoComplete="off"
              placeholder="Masukan Username"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              id="password"
              autoComplete="off"
              placeholder="Masukan Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-0">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
