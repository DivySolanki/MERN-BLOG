import "./Login.css";

export default function Login() {
  return (
    <div className="Login">
        <div id="One" className="formTwo">
                <form action="account.html" name="inputFormTwo">
                    <label>UserName</label>
                    <input id="username" name="username" type="text" placeholder="Create an username" required/>

                    <label>Password</label>
                    <input id="password" name="password" type="password" placeholder="Create a password" required/>
                    <div className="checkbox-wrapper">
                        <label className="checkbox" for="termsAndConditions">
                            <input className="check" type="checkbox" value="Accept" name="termsAndConditions" id="termsAndConditions"
                                required/><span>Agree to the Terms & conditions</span>
                        </label>
                        <a href="hi"><i className="icon fa-solid fa-arrow-right-from-bracket"></i></a>
                    </div>
                    <div className="btn-wrapper"><button id="submitBtn" type="submit">Submit</button></div>
                </form>
            </div>
    </div>
  )
}
