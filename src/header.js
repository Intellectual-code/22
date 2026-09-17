import logo from "./1.png"
function Header() {
  return (
    <header>
      <div className="LogoBlock">
        <img src={logo} alt=""></img>
        <p>MegaGame</p>
      </div>
      <div>
        <nav className="nav1">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
      <div>
        <button>Click</button>
      </div>
    </header>
  );
}
export default Header;