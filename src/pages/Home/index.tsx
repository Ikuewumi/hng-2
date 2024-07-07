import "./index.scss"


const Home = () => {

  return <>
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



  </>

}

export default Home
