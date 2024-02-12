/* eslint-disable react/prop-types */
import { useState } from "react";

export default function AddUserModal({ onAdd, onCancel }) {
  const [user, setUser] = useState({
    id: crypto.randomUUID(),
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    company: "",
    image: "",
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleSave() {
    // console.log(user);
    if (
      user.firstName === "" ||
      user.lastName === "" ||
      user.email === "" ||
      user.address === "" ||
      user.city === "" ||
      user.company === "" ||
      user.image === ""
    ) {
      alert("Please fill up all the fields");
      return;
    }

    const newUser = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: {
        address: user.address,
        city: user.city,
      },
      company: {
        name: user.company,
      },
      image: user.image,
    };

    onAdd(newUser);
    alert("New user added successfully!");
  }
  return (
    <div className="fixed w-screen h-screen bg-black/80 top-0 left-0 z-5 p-2">
      <div className="p-8 bg-white opacity-100 sm:shadow-md rounded-md border border-[#BFC8E5] z-10 relative sm:absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:max-w-[450px] overflow-auto">
        <h1 className="text-center font-bold text-xl mb-4">Add New User</h1>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            className="m-2 border p-1 rounded"
            value={user.firstName}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            className="m-2 border p-1 rounded"
            value={user.lastName}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            className="m-2 border p-1 rounded"
            value={user.email}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="flex flex-col justify-center sm:flex-row sm:justify-between sm:items-center">
          <label>Street & Suite:</label>
          <input
            type="text"
            name="address"
            className="m-2 border p-1 rounded"
            value={user.address}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <label>City:</label>
          <input
            type="text"
            name="city"
            className="m-2 border p-1 rounded"
            value={user.city}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <label>Company Name:</label>
          <input
            type="text"
            name="company"
            className="m-2 border p-1 rounded"
            value={user.company}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <label>Avatar URL:</label>
          <input
            type="text"
            name="image"
            className="m-2 border p-1 rounded"
            value={user.image}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="m-4 flex justify-between ">
          <button
            className="p-2 w-[80px] font-light bg-red-400 rounded text-white "
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="p-2 w-[80px] bg-[#849FFF] rounded text-white"
            onClick={() => handleSave()}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
