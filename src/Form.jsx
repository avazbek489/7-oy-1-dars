import React, { useState } from "react";

function Form({ handleAdd }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [balance, setBalance] = useState("");
  const [deposit, setDeposit] = useState("");
  const [status, setStatus] = useState("ACTIVE");

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return;
    }
    const newCustomer = { name, description, rate, balance, deposit, status };
    handleAdd(newCustomer);
  }
  function validate() {
    if (name.length <= 2) {
      alert("Ism kamida 3ta belgidan iborat boladi!");
      return false;
    }
    if (description.length <= 7) {
      alert("Malumot kamida 7ta belgidan iborat boladi!");
      return false;
    }
    if (rate <= 0 && rate < 0) {
      alert("Daraja 0dan kichik va 0ga teng bolmasligi kerak!");
      return false;
    }
    if (deposit.length == 0) {
      alert("Deposit 0ga teng bolmasligi kerak");
      return false;
    }
    return true;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control mb-4">
        <label htmlFor="name" className="cursor-pointer">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter name"
          className="input input-bordered"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control mb-4">
        <label htmlFor="desc" className="cursor-pointer">
          Description
        </label>
        <input
          type="text"
          className="input input-bordered"
          id="desc"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-control mb-4">
        <label htmlFor="rate" className="cursor-pointer">
          Rate
        </label>
        <input
          placeholder="Enter rate"
          type="number"
          className="input input-bordered"
          id="rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <div className="form-control mb-4">
        <label htmlFor="balance" className="cursor-pointer">
          Balance
        </label>
        <input
          type="number"
          placeholder="Enter balance"
          className="input input-bordered"
          id="balance"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
      </div>
      <div className="form-control mb-4">
        <label htmlFor="deposit" className="cursor-pointer">
          Deposit
        </label>
        <input
          type="number"
          className="input input-bordered"
          id="deposit"
          placeholder="Enter deposit"
          value={deposit}
          onChange={(e) => setDeposit(e.target.value)}
        />
      </div>
      <div className="form-control mb-4">
        <label htmlFor="status" className="cursor-pointer">
          Status
        </label>
        <select
          className="select select-bordered"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="ACTIVE">ACTIVE</option>
          <option value="INACTIVE">INACTIVE</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}

export default Form;
