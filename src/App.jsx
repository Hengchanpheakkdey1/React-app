import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ ...form });
    setSubmitted(true);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
          value={form.username}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <label>Gender</label>
        <div className="gender-group">
          <input
            type="radio"
            name="gender"
            id="male"
            value="Male"
            onChange={handleChange}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="Female"
            onChange={handleChange}
          />
          <label htmlFor="female">Female</label>
        </div>

        <label htmlFor="country">Country</label>
        <select
          name="country"
          id="country"
          value={form.country}
          onChange={handleChange}
        >
          <option value="">Select Country</option>
          <option value="Vietnam">Vietnam</option>
          <option value="Cambodia">Cambodia</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      {submitted && data && (
        <div className="user-card">
          <p>
            <span>Username:</span> {data.username}
          </p>
          <p>
            <span>Email:</span> {data.email}
          </p>
          <p>
            <span>Password:</span> {data.password}
          </p>
          <p>
            <span>Gender:</span> {data.gender}
          </p>
          <p>
            <span>Country:</span> {data.country}
          </p>
        </div>
      )}
    </>
  );
}

export default App;
