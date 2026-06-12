import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]); // store data of user
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; //another way too write
    //// const name = e.target.name;
    // const value = e.target.value;
    setForm((data) => ({
      ...data, // copy all fields from form state
      [name]: value,
    }));
  };

  const [submitted, setSubmitted] = useState(false); // When the page first loads: false. The card is hidden.

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from reloading
    setData({
      username: form.username,
      email: form.email,
      password: form.password,
      gender: form.gender,
      country: form.country,
    });
    setSubmitted(true); // Update the state is true, so the card will be shown. rerender the component
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        {" "}
        {/* call handleSubmit to handle the form submission and save the data to the usestate*/}
        <label htmlFor="Username">Username</label>
        <input
          type="text"
          placeholder="Username"
          id="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
        />{" "}
        {/*Whenever the user types in the input, take the text from the input and save it into the field state./*/}
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="Email"
          value={form.email}
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="Password">Password</label>
        <input
          placeholder="Password"
          type="password"
          id="Password"
          value={form.password}
          name="password"
          onChange={handleChange}
        />
        <label>Gender</label>
        <div className="gender-group">
          <input
            type="radio"
            name="gender"
            id="Male"
            value="Male"
            onChange={handleChange}
          />
          <label htmlFor="Male">Male</label>
          <input
            type="radio"
            name="gender"
            id="Female"
            value="Female"
            onChange={handleChange}
          />
          <label htmlFor="Female">Female</label>
        </div>
        <label htmlFor="Country">Country</label>
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

      {data &&
        submitted && ( // Show the card when the form is submitted.
          <div className="user-card">
            <p>
              <span>Username: </span>
              {data.username}
            </p>
            <p>
              <span>Email: </span>
              {data.email}
            </p>
            <p>
              <span>Password: </span>
              {data.password}
            </p>
            <p>
              <span>Gender: </span>
              {data.gender}
            </p>
            <p>
              <span>Country: </span>
              {data.country}
            </p>
          </div>
        )}
    </>
  );
}

export default App;
