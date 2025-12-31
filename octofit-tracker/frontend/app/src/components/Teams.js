import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;
  console.log('Teams API_URL:', API_URL);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setTeams(data.results || data);
        console.log('Fetched teams:', data);
      })
      .catch(err => console.error('Error fetching teams:', err));
  }, [API_URL]);

  return (
                <th>Actions</th>
    <Card className="mb-4 shadow">
      <Card.Body>
        <Card.Title as="h2" className="mb-3 text-info fw-bold">Teams</Card.Title>
        <Table striped bordered hover responsive className="align-middle">
          <thead className="table-info">
            <tr>
              <th>#</th>
              <th>Name</th>
                  <td>
                    <button className="btn btn-outline-info btn-sm me-2">Edit</button>
                    <button className="btn btn-outline-danger btn-sm">Delete</button>
                  </td>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={team.id || idx}>
                <td>{team.id || idx + 1}</td>
                <td className="fw-semibold text-dark">{team.name || '-'}</td>
                <td>{Array.isArray(team.members) ? team.members.join(', ') : '-'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default Teams;
