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
  const [update_id, setUpdateId] = useState("");
  const [update_paytype_id, setUpdatePaytypeId] = useState("");
  const [update_amount, setUpdateAmount] = useState("");
  const [update_date, setUpdateDate] = useState("");
  const [update_provider_id, setUpdateProviderId] = useState("");
  const [update_employee_type_id, setUpdateEmployeeTypeId] = useState("");

  // Delete state fields
  const [delete_id, setDeleteId] = useState("");
  
  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8000/create/", {
        headers : { 'Content-type' : 'application/json', Accept : 'application/json'},
        method: "POST",
        body: JSON.stringify({
            paytype_id: parseInt(create_paytype_id),
            amount: parseFloat(create_amount),
            date: create_date,
            provider_id: create_provider_id,
            employee_type_id: parseInt(create_employee_type_id),
        }),
      });
      // const resJson = await res.json();
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
      let res = await fetch("http://localhost:8000/update/" + update_id + "/", {
        headers : { 'Content-type' : 'application/json', Accept : 'application/json'},
        method: "PUT",
        body: JSON.stringify({
            id: update_id,
            paytype_id: update_paytype_id,
            amount: update_amount,
            date: update_date,
            provider_id: update_provider_id,
            employee_type_id: update_employee_type_id,
        }),
      });
      const resJson = await res.json();
      if (res.status - 200 < 100) {
        setUpdateId("");
        setUpdatePaytypeId("");
        setUpdateAmount("");
        setUpdateDate("");
        setUpdateProviderId("");
        setUpdateEmployeeTypeId("");
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
    
    <div className="form-container">
      <form onSubmit={handleCreateSubmit}>
        <div class = "titles">
        <p>
            Create New Data Entry
        </p>
        </div>
        <input
          type="number"
          value={create_paytype_id}
          placeholder="Paytype ID"
          onChange={(e) => setCreatePaytypeId(e.target.value)}
        />
        <input
          type="number"
          value={create_amount}
          placeholder="Amount"
          onChange={(e) => setCreateAmount(e.target.value)}
        />
        <input
          type="datetime-local"
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
          type="number"
          value={create_employee_type_id}
          placeholder="Employee Type ID"
          onChange={(e) => setCreateEmployeeTypeId(e.target.value)}
        />
        <div class="button-container">
        <button type="submit" class="btn btn-primary btn-lg active">Create</button>
        </div>
      </form>

      <form onSubmit={handleEditSubmit}>
      <div class = "titles">
        <p>
            Update Existing Data Entry
        </p>
        </div>
        <input
          type="number"
          value={update_id}
          placeholder="ID"
          onChange={(e) => setUpdateId(e.target.value)}
        />
        <input
          type="number"
          value={update_paytype_id}
          placeholder="Paytype ID"
          onChange={(e) => setUpdatePaytypeId(e.target.value)}
        />
        <input
          type="number"
          value={update_amount}
          placeholder="Amount"
          onChange={(e) => setUpdateAmount(e.target.value)}
        />
        <input
          type="datetime-local"
          value={update_date}
          placeholder="Date"
          onChange={(e) => setUpdateDate(e.target.value)}
        />
        <input
          type="text"
          value={update_provider_id}
          placeholder="Provider ID"
          onChange={(e) => setUpdateProviderId(e.target.value)}
        />
        <input
          type="number"
          value={update_employee_type_id}
          placeholder="Employee Type ID"
          onChange={(e) => setUpdateEmployeeTypeId(e.target.value)}
        />
        <div id="button-container">
          <button type="submit" class="btn btn-primary btn-lg active">Update</button>
        </div>
      </form>

      <form onSubmit={handleDeleteSubmit}>
      <div class = "titles">
        <p>
            Delete Data Entry
        </p>
        </div>
        <input
          type="number"
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
