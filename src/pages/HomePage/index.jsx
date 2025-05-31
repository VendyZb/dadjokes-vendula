import { useState } from 'react';
import './style.css';

export const HomePage = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img
              className="user-avatar"
              src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
              alt="user avatar"
            />
            <p className="user-name">Neroxx</p>
          </div>
          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>
        <div className="joke__likes">
          <button className="btn-like btn-like--up" onClick={() => setLikes(likes + 1)}></button>
          <span className="likes-count likes-count--up">{likes}</span>
          <button className="btn-like btn-like--down" onClick={() => setDislikes(dislikes + 1)}></button>
          <span className="likes-count likes-count--down">{dislikes}</span>
        </div>
      </div>
    </div>
  );
};

