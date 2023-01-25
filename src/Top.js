import React from 'react'
import './Top.css';
export default function Top() {
  return (
    <div>
 <div className="App-header">
        <img src="img1.webp"></img>
        <img src="img2.webp"></img>
       <img src="img3.webp"></img>
       <img src="img4.webp" ></img>
       <img src="img5.webp"></img>
       <img src="img6.webp"></img>
       <img src="img7.webp"></img>
       <img src="img8.webp"></img>
       <img src="img9.webp"></img>
       </div>

     <div class="menu-bar">
      <ul>
        <li><a href="#" className="Top">Top Offers</a></li>
        <li><a href="#" className="Grocery">Grocery</a></li>
        <li><a href="#" className="Mobiles">Mobiles </a>

            <div class="dropdown-menu">
                <ul>
                  <li><a href="#" className="Pricing">Pricing</a></li>
                  <li><a href="#">Portfolio</a></li>
                  <li>
                    <a href="#">Team</a>
                    <div class="dropdown-menu-1">
                      <ul>
                        <li><a href="#">Team-1</a></li>
                        <li><a href="#">Team-2</a></li>
                        <li><a href="#">Team-3</a></li>
                        <li><a href="#">Team-4</a></li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
        </li>
        <li><a href="#">Fashion</a>
        <div class="dropdown-menu">
                <ul>
                <li><a href="#">Men's Top Wear</a></li>
                        <li><a href="#">Men's Bottom Wear</a></li>
                        <li><a href="#">Women Ethnic</a></li>
                        <li><a href="#">Women Western</a></li>
                        <li><a href="#">Men FootWear</a></li>
                        <li><a href="#">Women FootWear</a></li>
                        <li><a href="#">Watch</a></li>
                        <li><a href="#">Bag,Sutcase</a></li>
                        <li><a href="#">Kid's</a></li>
                        <li><a href="#">Essencials</a></li>
                        <li><a href="#">Winter</a></li>
      
                </ul>
              </div>
        </li>
        <li><a href="#">Electronics</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Appliances</a></li>
        <li><a href="#">Travel</a></li>
        <li><a href="#">Beauty,Toys & More</a></li>
      </ul>
    </div>

    </div>
  )
}
