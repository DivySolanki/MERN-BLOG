import "./Register.css";

export default function Register() {
  return (
    <div className="Register">
      <main className="container">
        <div className="form" id="proceed">
          <form name="inputForm">
            <label>UserName</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Create an username"
              required
            />
            <label for="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Type here..."
              required
            />
            <label>Set Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              required
            />

            <label>Confirm Password</label>
            <input
              id="confirmPass"
              name="password"
              type="password"
              placeholder="Confirm your password"
              required
            />

            <div className="button">
              <a id="proceedBtn">
                <span className="hover">Hover Here</span>
                <span className="change">Register</span>
              </a>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
