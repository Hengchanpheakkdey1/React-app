import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  const [data, setData] = useState([]); // store data of user

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from reloading
    setData({
      username: username,
      email: email,
      password: password,
      gender: gender,
      country: country
    })
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="Username">Username</label>
        <input type="text"
          placeholder="Username"
          id="Username"
          value={username}
          onChange={(e) => { setUserName(e.target.value); }} />
        <label htmlFor="Email">Email</label>
        <input type="email"
          placeholder="Email"
          id="Email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); }} />
        <label htmlFor="Password">Password</label>
        <input placeholder='Password' type='password'
          id="Password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); }} />
        <label>Gender</label>
        <div className="gender-group">
          <input type="radio"
            name="gender"
            id="Male"
            value="Male"
            onChange={(e) => { setGender(e.target.value); }} />
          <label htmlFor="Male">Male</label>
          <input type="radio"
            name="gender"
            id="Female"
            value="Female"
            onChange={(e) => { setGender(e.target.value); }} />
          <label htmlFor="Female">Female</label>
        </div>
        <label htmlFor="Country">Country</label>
        <select
          name="country"
          id="country"
          value={country}
          onChange={(e) => { setCountry(e.target.value); }}>
          <option value="">Select Country</option>
          <option value="Vietnam">Vietnam</option>
          <option value="Cambodia">Cambodia</option>
        </select>
        <button type="submit">Submit</button>
      </form>


      <div> {/* display data of user */}
        <p>{data.username}</p>
        <p>{data.email}</p>
        <p>{data.password}</p>
        <p>{data.gender}</p>
        <p>{data.country}</p>
      </div>
    </>
  )
}

export default App
