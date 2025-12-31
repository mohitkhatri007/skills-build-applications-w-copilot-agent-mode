import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

const Users = () => {
  const [users, setUsers] = useState([]);
  const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;
  console.log('Users API_URL:', API_URL);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setUsers(data.results || data);
        console.log('Fetched users:', data);
      })
      .catch(err => console.error('Error fetching users:', err));
  }, [API_URL]);

  return (
    <Card className="mb-4 shadow">
      <Card.Body>
        <Card.Title as="h2" className="mb-3 text-warning fw-bold">Users</Card.Title>
        <Table striped bordered hover responsive className="align-middle">
          <thead className="table-warning">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id || idx}>
                <td>{user.id || idx + 1}</td>
                <td className="fw-semibold text-dark">{user.name || '-'}</td>
                <td>{user.email || '-'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default Users;
