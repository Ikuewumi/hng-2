import Assets from "./components/Assets"
import "./App.scss"

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

        <section className="mhero">
          <picture className="mhero-picture">
            <img className="mhero-image" src="/app.jpg" alt="Autumn Collection of Devices" />
          </picture>


          <div className="mhero-content">
            <div className="mhero-text-wrapper">
              <h1 className="mhero-heading">Autumn Collection</h1>
              <p className="mhero-text">Get the latest tech products at CRAZY discount prices.</p>
            </div>

            <button className="mhero-button" data-btn>Buy Now</button>
          </div>
        </section>



        <section className="mpicks">
          <h2 className="mpicks-heading">Editor’s Pick</h2>
          <p className="mpicks-text">From the best stores and offers</p>



          <ul className="mpicks-list">

            <li className="mpicks-li">
              <div className="hpcard">
                <img className="hpcard-img" src="/screen.jpg" alt='Dell UltraSharp 38" 1600p Curved Monitor' />
                <h3 className="hpcard-name">Dell UltraSharp 38" 1600p Curved Monitor</h3>
                <p className="hpcard-id">#DEU3824DW • MFR #U3824DW</p>
                <div className="hpcard-price-bar">
                  <strong className="hpcard-price">$1,041.73</strong>
                  <button data-btn className="hpcard-button">Add To Card</button>
                </div>
              </div>
            </li>


            <li className="mpicks-li">
              <div className="hpcard">
                <img className="hpcard-img" src="/screen.jpg" alt='Dell UltraSharp 38" 1600p Curved Monitor' />
                <h3 className="hpcard-name">Dell UltraSharp 38" 1600p Curved Monitor</h3>
                <p className="hpcard-id">#DEU3824DW • MFR #U3824DW</p>
                <div className="hpcard-price-bar">
                  <strong className="hpcard-price">$1,041.73</strong>
                  <button data-btn className="hpcard-button">Add To Card</button>
                </div>
              </div>
            </li>


            <li className="mpicks-li">
              <div className="hpcard">
                <img className="hpcard-img" src="/screen.jpg" alt='Dell UltraSharp 38" 1600p Curved Monitor' />
                <h3 className="hpcard-name">Dell UltraSharp 38" 1600p Curved Monitor</h3>
                <p className="hpcard-id">#DEU3824DW • MFR #U3824DW</p>
                <div className="hpcard-price-bar">
                  <strong className="hpcard-price">$1,041.73</strong>
                  <button data-btn className="hpcard-button">Add To Card</button>
                </div>
              </div>
            </li>

          </ul>


        </section>


        <section className="mad">
          <picture className="mad-picture">
            <img className="mad-image" src="/section.jpg" alt="Autumn Collection of Devices" />
          </picture>


          <div className="mad-content">
            <div className="mad-text-wrapper">
              <h2 className="mad-heading">Get A Custom Office Setup</h2>
              <p className="mad-text">Talk to our team to customize your new workspace.</p>
            </div>

            <button className="mad-button" data-btn>Buy Now</button>
          </div>
        </section>



        <section className="mfoot">

          <div className="mfoot-content">
            <h2 className="mfoot-heading">Top Categories</h2>

            <ul className="mfoot-list">
              <li className="mfoot-li">
                <a href="#" className="mfoot-link">Mac</a>
              </li>


              <li className="mfoot-li">
                <a href="#" className="mfoot-link">Laptops</a>
              </li>

              <li className="mfoot-li">
                <a href="#" className="mfoot-link">iPads and Tablets</a>
              </li>

              <li className="mfoot-li">
                <a href="#" className="mfoot-link">Desktops and Workstations</a>
              </li>

              <li className="mfoot-li">
                <a href="#" className="mfoot-link">Accessories</a>
              </li>

            </ul>
          </div>

          <picture className="mfoot-picture">
            <img src="/app.jpg" alt="Image" className="mfoot-img" />
          </picture>

        </section>


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
