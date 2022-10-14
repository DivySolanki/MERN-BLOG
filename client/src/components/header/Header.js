import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <header>
        <h1>Find It At One Click.</h1>
      </header>
      <div className="search-div">
        <input type="text" name="search" id="searchbar" />
        <button>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Search
        </button>
      </div>
    </div>
  );
}
