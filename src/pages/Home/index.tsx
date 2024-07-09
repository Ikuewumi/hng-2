import { useStore } from "@nanostores/react"
import "./index.scss"
import "@/stores/cart"
import { $allItems } from "@/stores/global"
import HomeCard from "@/components/HomeCard"

const Home = () => {
  const allItems = useStore($allItems)

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

        <a href="#pick" className="mhero-button" data-btn>Buy Now</a>
      </div>
    </section>



    <section className="mpicks">
      <h2 className="mpicks-heading" id="pick">Editor’s Pick</h2>
      <p className="mpicks-text">From the best stores and offers</p>



      <ul className="mpicks-list">
        {allItems.map(item => {
          return {
            imageUrl: item.imageUrl ?? "",
            name: item.name,
            productId: item.productId,
            manufacturerId: item.manufacturingId,
            price: item.price
          }
        }).map((item_, i) => <li className="mpicks-li" key={i}><HomeCard {...item_} /></li>)}
        <li className="mpicks-li">
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

        <a href="#pick" className="mad-button" data-btn>Buy Now</a>
      </div>
    </section>



    <section className="mfoot">

      <div className="mfoot-content">
        <h2 className="mfoot-heading">Our Products</h2>

        <ul className="mfoot-list">
          <li className="mfoot-li">
            <span className="mfoot-link">Mac</span>
          </li>


          <li className="mfoot-li">
            <span className="mfoot-link">Laptops</span>
          </li>

          <li className="mfoot-li">
            <span className="mfoot-link">iPads and Tablets</span>
          </li>

          <li className="mfoot-li">
            <span className="mfoot-link">Desktops and Workstations</span>
          </li>

          <li className="mfoot-li">
            <span className="mfoot-link">Accessories</span>
          </li>

        </ul>
      </div>

      <picture className="mfoot-picture">
        <img src="/products.jpg" alt="Image" className="mfoot-img" />
      </picture>

    </section>



  </>

}

export default Home
