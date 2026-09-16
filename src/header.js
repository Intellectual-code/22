import logo from "./1.png"
function Header() {
  return (
    <header>
      <div className="LogoBlock">
        <img src={logo} alt=""></img>
      </div>
      <div>
        <nav>
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