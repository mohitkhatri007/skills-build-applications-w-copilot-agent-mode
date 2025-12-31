

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';


function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark" expand="lg" className="mb-4 shadow">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <span className="fw-bold">Octofit Tracker</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/activities" className="fw-semibold">Activities</Nav.Link>
              <Nav.Link as={Link} to="/leaderboard" className="fw-semibold">Leaderboard</Nav.Link>
              <Nav.Link as={Link} to="/teams" className="fw-semibold">Teams</Nav.Link>
              <Nav.Link as={Link} to="/users" className="fw-semibold">Users</Nav.Link>
              <Nav.Link as={Link} to="/workouts" className="fw-semibold">Workouts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<Activities />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
