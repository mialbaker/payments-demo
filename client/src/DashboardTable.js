import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import "./DashboardTable.css";

function DashboardTable() {
    const [payments, setPayments] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
    fetch("http://localhost:8000/")
        .then((response) => response.json())
        .then((data) => setPayments(data))
        .catch((error) => setError(error.message));
    }, []);

    return (
      <div className="table">
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Paytype ID</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Provider ID</Table.HeaderCell>
              <Table.HeaderCell>Employee Type ID</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {payments.map(({ pk, paytype_id, amount, date, provider_id, employee_type_id }) => (
              <Table.Row>
                <Table.Cell>
                  <div>{pk}</div>
                </Table.Cell>
                <Table.Cell>
                  <div>{paytype_id}</div>
                </Table.Cell>
                <Table.Cell>
                  <div>{amount}</div>
                </Table.Cell>
                <Table.Cell>
                  <div>{date}</div>
                  </Table.Cell>
                  <Table.Cell>
                  <div>{provider_id}</div>
                  </Table.Cell>
                  <Table.Cell>
                  <div>{employee_type_id}</div>
                  </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default DashboardTable;