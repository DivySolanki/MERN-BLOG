import "./Topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  const user = false;
  return (
    <div className="Topbar">
      <header>
        <div className="logo"></div>
        <h2>Bloggie</h2>
      </header>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>{user ? <Link className="link" to="/write">New Blog</Link> : ""}</li>
          <li>{user ? <Link className="link" to="/account">Account</Link> : ""}</li>
        </ul>
      </nav>
      <nav>
        <ul>
          {user ? (
            ""
          ) : (
            <>
              <li>
                <Link className="link" to="/register">Register</Link>
              </li>
              <li>
                <Link className="link" to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
