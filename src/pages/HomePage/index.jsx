import { useEffect, useState } from 'react';
import { Joke } from '../../components/Joke';
import './style.css';

export const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:4000/api/users'); 
      const json = await response.json();
      setUsers(json.data); 
    };
    fetchUsers();
  }, []);

  return (
    <>
      {users.map((user) => (
        <Joke
          key={user.id}
          userAvatar={user.avatar}
          userName={user.name}
          text={user.text}
          likes={user.likes}
          dislikes={user.dislikes}
        />
      ))}
    </>
  );
};
