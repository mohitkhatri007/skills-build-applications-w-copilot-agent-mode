


function App() {
  console.log("REACT_APP_CODESPACE_NAME:", process.env.REACT_APP_CODESPACE_NAME);
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark" expand="lg" className="mb-4 shadow">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={process.env.PUBLIC_URL + '/octofitapp-small.png'} alt="Octofit Logo" className="octofit-logo" />
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
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="fw-semibold">Home</Nav.Link>
              <Nav.Link href="#about" className="fw-semibold">About</Nav.Link>
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
      {/* Example Modal for demonstration */}
      <div className="modal fade" id="infoModal" tabIndex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="infoModalLabel">Welcome to Octofit Tracker</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>This is a demo modal using Bootstrap styles. You can add more modals for forms or info popups.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
