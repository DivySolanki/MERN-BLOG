import "./Single.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Single() {
  return (
    <div className="Single">
      <div className="blog-preview">
        <div className="blog-photo">
          <img src={`hehe`} alt="blog-theme" />
        </div>
        <div className="title">
          <h2>blog title</h2>
        </div>
        <div className="body">
          <p>blog body</p>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
