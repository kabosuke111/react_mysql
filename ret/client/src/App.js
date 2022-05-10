import React, { Component, useEffect, useState } from 'react';

const App = () => {
  const [users,setUser] = useState([]);

  useEffect(() => {
    fetch('/users')
    .then(res => res.json())
    .then((data) => {
      setUser(data);
    })
    .catch((er)=>{
      console.log(er);
    });
  }, []);
  return (
    <div classname="App">
        <h1>Users</h1>
        {users.map((user) =>
          <div key={user.id}>{user.id}.{user.appointedto}</div>
        )}
      </div>
  );
}

export default App;