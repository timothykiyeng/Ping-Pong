import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);
  const [skillSet, setSkillSet] = useState([]);
  const [videoData, setVideoData] = useState([]);

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
      .then((skill) => {
        setSkillSet(skill);
      });
  }, []);

  function handleLogout() {
    setUser(null);
  }

  function handleFindVideoData(data){
    setVideoData(data);
  }

  function handleUpdateItem(updatedItemObj) {
    const editedItems = skillSet.map((item) => {
      if (item.id === updatedItemObj.id) {
        return updatedItemObj;
      } else {
        return item;
      }
    });
    setSkillSet(editedItems);
  }


  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <div className="App">
        <Header user={user} setUser={setUser} onLogout={handleLogout} />
        <Routes>
          <Route exact path="*" element={
            <MainContainer
              yogaData={yogaData}
              handleUpdateItem={handleUpdateItem}
              videoData={videoData}
              handleFindVideoData={handleFindVideoData}
              user={user}
              />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
