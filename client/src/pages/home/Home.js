import "./Home.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Blog from "../../components/blog/Blog";

export default function Home() {
  return (
    <div className="Home">
        <Header />
        <div className="BlogList">
          <Blog />
        </div>
        <Sidebar/>
    </div>
  )
}
