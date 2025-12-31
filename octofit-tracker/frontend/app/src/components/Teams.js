

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
    <Card className="mb-4 shadow">
      <Card.Body>
        <Card.Title as="h2" className="mb-3 text-info fw-bold">Teams</Card.Title>
        <Table striped bordered hover responsive className="align-middle">
          <thead className="table-info">
            <tr>
              <th>#</th>
              <th>Name</th>
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
