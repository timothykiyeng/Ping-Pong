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

      //const navigate = useNavigate();

      return (
        <>
           <div className="header-background">
              <div>
              <p className="welcome">Welcome, {user.username}!</p>
              <button onClick={handleLogoutOnClick} className="logout-button"> Logout </button>
              </div>
              <Link to="/comments" className="nav-button"> Your Thoughts? </Link>
              <Link to="*" className="nav-button"> Home </Link>

          </div>
      </>
    )

}

export default Navbar
