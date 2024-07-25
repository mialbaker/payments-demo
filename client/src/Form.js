import React, { useState } from "react";
import "./Form.css";

function Form() {

  // Create state fields
  const [create_paytype_id, setCreatePaytypeId] = useState("");
  const [create_amount, setCreateAmount] = useState("");
  const [create_date, setCreateDate] = useState("");
  const [create_provider_id, setCreateProviderId] = useState("");
  const [create_employee_type_id, setCreateEmployeeTypeId] = useState("");

  // Update state fields
  const [id, setId] = useState("");
  const [paytype_id, setPaytypeId] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [provider_id, setProviderId] = useState("");
  const [employee_type_id, setEmployeeTypeId] = useState("");

  // Delete state fields
  const [delete_id, setDeleteId] = useState("");
  
  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8000/create/", {
        headers : { 'Content-type' : 'application/json', Accept : 'application/json'},
        method: "POST",
        body: JSON.stringify({
            create_paytype_id: parseInt(create_paytype_id),
            create_amount: parseFloat(create_amount),
            create_date: create_date,
            create_provider_id: create_provider_id,
            create_employee_type_id: parseInt(create_employee_type_id)
        }),
      });
      const resJson = await res.json();
      if (res.status - 200 < 100) {
        setCreatePaytypeId("");
        setCreateAmount("");
        setCreateDate("");
        setCreateProviderId("");
        setCreateEmployeeTypeId("");
        alert("Create success!")
        window.location.reload();
      } else {
        alert("Failed to create");
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8000/update/" + id + "/", {
        headers : { 'Content-type' : 'application/json', Accept : 'application/json'},
        method: "PUT",
        body: JSON.stringify({
            id: parseInt(id),
            paytype_id: paytype_id,
            amount: amount,
            date: date,
            provider_id: provider_id,
            employee_type_id: employee_type_id,
        }),
      });
      const resJson = await res.json();
      if (res.status - 200 < 100) {
        setId("");
        setPaytypeId("");
        setAmount("");
        setDate("");
        setProviderId("");
        setEmployeeTypeId("");
        alert("Update success!")
        window.location.reload();
      } else {
        alert("Failed to update");
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8000/delete/" + delete_id + "/", {
        headers : { 'Content-type' : 'application/json', Accept : 'application/json'},
        method: "DELETE",
        body: JSON.stringify({
            id: parseInt(delete_id)
        }),
      });
      if (res.status - 200 < 100) {
        setDeleteId("");
        alert("Delete success!");
        window.location.reload();
      } else {
        alert("Failed to delete");
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div className="App">
      <form onSubmit={handleCreateSubmit}>
        <input
          type="text"
          value={create_paytype_id}
          placeholder="Paytype ID"
          onChange={(e) => setCreatePaytypeId(e.target.value)}
        />
        <input
          type="text"
          value={create_amount}
          placeholder="Amount"
          onChange={(e) => setCreateAmount(e.target.value)}
        />
        <input
          type="text"
          value={create_date}
          placeholder="Date"
          onChange={(e) => setCreateDate(e.target.value)}
        />
        <input
          type="text"
          value={create_provider_id}
          placeholder="Provider ID"
          onChange={(e) => setCreateProviderId(e.target.value)}
        />
        <input
          type="text"
          value={create_employee_type_id}
          placeholder="Employee Type ID"
          onChange={(e) => setCreateEmployeeTypeId(e.target.value)}
        />
        <button type="submit" class="btn btn-primary btn-lg active">Create</button>
      </form>

      <form onSubmit={handleEditSubmit}>
        <input
          type="text"
          value={id}
          placeholder="ID"
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          value={paytype_id}
          placeholder="Paytype ID"
          onChange={(e) => setPaytypeId(e.target.value)}
        />
        <input
          type="text"
          value={amount}
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          value={date}
          placeholder="Date"
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          value={provider_id}
          placeholder="Provider ID"
          onChange={(e) => setProviderId(e.target.value)}
        />
        <input
          type="text"
          value={employee_type_id}
          placeholder="Employee Type ID"
          onChange={(e) => setEmployeeTypeId(e.target.value)}
        />
        <button type="submit" class="btn btn-primary btn-lg active">Edit</button>
      </form>

      <form onSubmit={handleDeleteSubmit}>
        <input
          type="text"
          value={delete_id}
          placeholder="ID"
          onChange={(e) => setDeleteId(e.target.value)}
        />
        <button type="submit" class="btn btn-primary btn-lg active">Delete</button>
      </form>
    </div>
  );
}

export default Form;
