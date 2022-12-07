import React from 'react';
import { Link } from 'react-router-dom';

function Navbar ( {user, setUser} ) {

    function handleLogoutOnClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

      return (
        <>
           <div className="header-background">
              <div>
              <p className="welcome">Welcome, {user.username}!</p>
              <button onClick={handleLogoutOnClick} className="logout-button">Logout</button>
              </div>
              <Link exact to="/comments" className="nav-button"> Your Thoughts? </Link>
              <Link exact to="*" className="nav-button"> Home </Link>
          </div>
      </>
    )

}

export default Navbar
