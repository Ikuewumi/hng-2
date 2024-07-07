import Assets from "./components/Assets"
import "./App.scss"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <header data-sg className="head">
        <div className="head-wrapper">
          <figure className="head-figure">
            <svg className="head-logo" viewBox="0 0 285 24"><use href="#logo"></use></svg>
          </figure>

          <nav className="head-nav">
            <ul className="head-nav-list text">
              <li className="head-nav-li"><a href="#" className="head-nav-link">Mac</a></li>
              <li className="head-nav-li"><a href="#" className="head-nav-link">Laptops</a></li>
              <li className="head-nav-li"><a href="#" className="head-nav-link">iPads and Tablets</a></li>
              <li className="head-nav-li"><a href="#" className="head-nav-link">Desktops & Workstations</a></li>
              <li className="head-nav-li"><a href="#" className="head-nav-link">Accessories</a></li>
            </ul>



            <ul className="head-nav-list icons">
              <li className="head-nav-li">
                <a href="#" className="head-nav-link">
                  <svg className="head-nav-svg" viewBox="0 0 24 24"><use href="#search"></use></svg>
                </a>
              </li>
              <li className="head-nav-li">
                <a href="#" className="head-nav-link icon">
                  <svg className="head-nav-svg" viewBox="0 0 24 24"><use href="#shopping-cart"></use></svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>


      <main data-sg className="main">

        <Outlet />

      </main>


      <footer className="foot" data-sg>
        <div className="foot-wrapper">
          <svg className="foot-logo" viewBox="0 0 285 24">
            <title>Timbu Cloud</title>
            <use href="#logo"></use>
          </svg>


          <p className="foot-text">
            Your one-stop tech job. The biggest personal computing retailer in West Africa
          </p>

          <hr className="foot-hr" />

          <div className="foot-linkbar">
            <ul className="foot-social-list">
              <li className="foot-social-li">
                <a className="foot-social-link" href="#" data-btn>
                  <svg className="foot-social-svg" viewBox="0 0 24 24"><use href="#facebook"></use></svg>
                </a>
              </li>

              <li className="foot-social-li">
                <a className="foot-social-link" href="#" data-btn>
                  <svg className="foot-social-svg" viewBox="0 0 24 24"><use href="#twitter"></use></svg>
                </a>
              </li>
              <li className="foot-social-li">
                <a className="foot-social-link" href="#" data-btn>
                  <svg className="foot-social-svg" viewBox="0 0 24 24"><use href="#instagram"></use></svg>
                </a>
              </li>

            </ul>



            <ul className="foot-link-list">
              <li className="foot-link-li">
                <a href="#" className="foot-link-text">Terms Of Service</a>
              </li>

              <li className="foot-link-li">
                <a href="#" className="foot-link-text">Privacy Policy</a>
              </li>

              <li className="foot-link-li">
                <a href="#" className="foot-link-text">Returns & Refunds</a>
              </li>

            </ul>
          </div>


        </div>


      </footer>


      <Assets />
    </>
  )
}

export default App
