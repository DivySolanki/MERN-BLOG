import "./Blog.css";
import {Link} from "react-router-dom";

export default function BlogList() {
    return(
        <div className="Blog">
            <Link className="link" to="/single">
                <div className="img-wrapper">
                    <img src={`something.png`} alt="blog-theme-img" />
                </div>
                <header>
                    <h3>blog title</h3>
                </header>
                <div className="body-wrapper">
                    <p>blog desc</p>
                </div>
            </Link>
        </div>
    )
}