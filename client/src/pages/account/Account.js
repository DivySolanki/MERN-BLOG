import "./Account.css";

export default function Account() {
  return (
    <div className="Account">
        <div className="container">
            <div className="profile">
                <img onclick="profile()" className="profilePic" src="../../../public/imgs/profile.png" alt="profile"/>
            </div>
            <div className="username">
                <label>USERNAME</label>
                <p id="username">placeholder</p>
            </div>
            <div className="email">
                <label>LINKED E-MAIL</label>
                <p id="email">placeholder</p>
            </div>
            <div className="bio">
                <label>bio</label>
                <img src="CSS/images/write.png" alt="write-logo"/>
                <input id="bio" type="text" placeholder="Write your bio...!"/>
            </div>
            </div>

        <div className="editor">
            <p>Create Your Own Blog!</p>
            <a className="editorBtn" href="www.google.com">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Write Blog
            </a>
        </div>
    </div>
  )
}
