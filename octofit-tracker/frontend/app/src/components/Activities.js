import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;
  console.log('Activities API_URL:', API_URL);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setActivities(data.results || data);
        console.log('Fetched activities:', data);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, [API_URL]);

  return (
                <th>Actions</th>
    <Card className="mb-4 shadow">
      <Card.Body>
        <Card.Title as="h2" className="mb-3 text-primary fw-bold">Activities</Card.Title>
        <Table striped bordered hover responsive className="align-middle">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Name</th>
                  <td>
                    <button className="btn btn-outline-primary btn-sm me-2">Edit</button>
                    <button className="btn btn-outline-danger btn-sm">Delete</button>
                  </td>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, idx) => (
              <tr key={activity.id || idx}>
                <td>{activity.id || idx + 1}</td>
                <td className="fw-semibold text-dark">{activity.name || '-'}</td>
                <td>{activity.description || '-'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default Activities;
