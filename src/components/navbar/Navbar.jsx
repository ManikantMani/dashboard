import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
        <div className="navbar_container">

          {/* navbar top section */}

          <div className="nav_profile_sec">
          <div className="nav_profile_img_name">
            <div className="nav_profile_img"><span>N</span></div>
            <div className="nav_profile_name"><span>Name</span></div>
          </div>
            <div className="nav_profile_button">
              <button className="nav_profile_back_button"><span><i class="fa-solid fa-arrow-left-long"></i></span></button>
            </div>
          </div>
          
        {/* navbar middle section */}

        <div className="navbar_section_container">
          <nav className="navbar_nav_section_container">
            <ul className="navbar_section_ul">
              <li className="navbar_section_li">
              <NavLink to= '/' className= 'navbar_section_li'>
                <span><i class="fa-solid fa-table-cells-large"></i></span>
                <span>Home</span>
                </NavLink>
              </li>
              <li className="navbar_section_li">
              <NavLink to= '/' className= 'navbar_section_li'>
                <span><i class="fa-solid fa-chart-column"></i></span>
                <span>Section 1</span>
                </NavLink>
              </li>
              <li className="navbar_section_li">
              <NavLink to= '/' className= 'navbar_section_li'>
                <span><i class="fa-brands fa-hubspot"></i></span>
                <span>Section 2</span>
                </NavLink>
              </li>
              <li className="navbar_section_li">
              <NavLink to= '/' className= 'navbar_section_li'>
                <span><i class="fa-solid fa-chart-line"></i></span>
                <span>Section 3</span>
                </NavLink>
              </li>
              <li className="navbar_section_li">
              <NavLink to= '/' className= 'navbar_section_li'>
                <span><i class="fa-brands fa-bitcoin"></i></span>
                <span>Section 4</span>
                </NavLink>
              </li>
              <li className="navbar_section_li">
              <NavLink to= '/' className= 'navbar_section_li'>
                <span><i class="fa-solid fa-coins"></i></span>
                <span>Section 5</span>
                </NavLink>
              </li>
              <li className="navbar_section_li">
              <NavLink to= '/' className= 'navbar_section_li'>
                <span><i class="fa-solid fa-chart-pie"></i></span>
                <span>Section 6</span>
                </NavLink>
              </li>
              <li className="navbar_section_li">
              <NavLink to= '/' className= 'navbar_section_li'>
                <span><i class="fa-solid fa-signal"></i></span>
                <span>section 7</span>
                </NavLink>
              </li>
              <li className="navbar_section_li">
              <NavLink to= '/section8' className= 'navbar_section_li'>
                <span><i class="fa-solid fa-share-nodes"></i></span>
                <span>Section 8</span>
                </NavLink>
              </li>
              <li className="navbar_section_li">
              <NavLink to= '/' className= 'navbar_section_li'>
                <span><i class="fa-solid fa-file-lines"></i></span>
                <span>Documentation</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* navbar bottom section */}

        <div className="navbar_bottom_section">
          <div className="navbar_bottom_button_group">
            <button className="navbar_bottom_button1"><span>N</span><span>$0.90</span></button>
            <button className="navbar_bottom_button2">Buy $XYZ</button>
          </div>
        </div>
          <div className="navbar_bottom_button_group2">
            <a className="navbar_bottom_button_world" href="#"><i class="fa-solid fa-globe"></i></a>
            <button className="navbar_bottom_button_night_mode"><span><i class="fa-solid fa-moon"></i></span><span><i class="fa-solid fa-circle"></i></span></button>
          </div>
        </div>
    </>
  )
}

export default Navbar;