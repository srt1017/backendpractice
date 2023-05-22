import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { useEffect, useState } from "react";
 

interface User {
  id: number;
  name: string;
  username: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((res) => setUsers(res.data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <>
    <p className="text-danger">{error}</p>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}, {user.username}{" "}
        </li>
      ))}
    </ul>
    </>
  );
  
}

export default App;
