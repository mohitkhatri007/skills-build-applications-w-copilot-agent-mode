import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;
  console.log('Leaderboard API_URL:', API_URL);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setLeaders(data.results || data);
        console.log('Fetched leaderboard:', data);
      })
      .catch(err => console.error('Error fetching leaderboard:', err));
  }, [API_URL]);

  return (
    <Card className="mb-4 shadow">
      <Card.Body>
        <Card.Title as="h2" className="mb-3 text-success fw-bold">Leaderboard</Card.Title>
        <Table striped bordered hover responsive className="align-middle">
          <thead className="table-success">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((leader, idx) => (
              <tr key={leader.id || idx}>
                <td>{leader.id || idx + 1}</td>
                <td className="fw-semibold text-dark">{leader.name || '-'}</td>
                <td className="fw-bold">{leader.score || '-'}</td>
                <td>
                  <button className="btn btn-outline-primary btn-sm me-2">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default Leaderboard;
