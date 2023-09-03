import logo from '../../assets/images/logo.jpeg';
import './navbar.css';
const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light px-3" style={{backgroundColor: "#e3f2fd"}}>
      <a className="navbar-brand" href="/">
      <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/> Home</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/create-journey">
                Create Journey
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="my-prev-journey">
                My Journey
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="journey-enquiries">
                All Enquiry
              </a>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
