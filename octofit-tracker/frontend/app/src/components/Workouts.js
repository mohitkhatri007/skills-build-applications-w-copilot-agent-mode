

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;
  console.log('Workouts API_URL:', API_URL);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setWorkouts(data.results || data);
        console.log('Fetched workouts:', data);
      })
      .catch(err => console.error('Error fetching workouts:', err));
  }, [API_URL]);

  return (
    <Card className="mb-4 shadow">
      <Card.Body>
        <Card.Title as="h2" className="mb-3 text-danger fw-bold">Workouts</Card.Title>
        <Table striped bordered hover responsive className="align-middle">
          <thead className="table-danger">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Type</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, idx) => (
              <tr key={workout.id || idx}>
                <td>{workout.id || idx + 1}</td>
                <td className="fw-semibold text-dark">{workout.name || '-'}</td>
                <td>{workout.type || '-'}</td>
                <td>{workout.duration || '-'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default Workouts;
