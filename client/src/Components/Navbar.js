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

}
