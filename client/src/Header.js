
import Navbar from './Navbar';

export default function Header({ user, setUser, onLogout }) {


  return (
    <div className="header-background">
      <h1 className="header">Ping Pong</h1>
      <Navbar user={user} setUser={setUser} onLogout={onLogout}/>
    </div>
  )
}
