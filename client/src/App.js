
import './App.css';
import React, {useEffect, useState} from 'react';
//import { Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import Login from './Components/Login'

function App() {

  const [user, setUser] = useState(null);
  const [skillSet, setSkillSet] = useState([]);
  //const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/skill_sets")
      .then((r) => r.json())
      .then((skill) => {setSkillSet(skill)});
  }, []);

  function handleLogout() {
    setUser(null);
  }



  if (!user) return <Login onLogin={setUser} />;



  return (
    <>
    <div className="App">
      <Header user={user} setUser={setUser} onLogout={handleLogout} />

    </div>
    </>
  );
}

export default App;
