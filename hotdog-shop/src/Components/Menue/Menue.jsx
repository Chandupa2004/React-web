import React from 'react';
import './Menue.css';
import hot4 from '../../assets/hot4.jpg';
import hot1 from '../../assets/hot1.jpg';
import hot3 from '../../assets/hot3.jpg';
import hot2 from '../../assets/hot2.jpg';

const Menu = () => {

  

  return (
    <div className='menu'>
      <h2 className="title">Our Menu</h2>
      <p className="subtitle">Always Good Things For You</p>
      <div className='Menu'>
        <div className='slider'>
          <ul>
            <li>
              <div className='slide'>
                <div className='foodinfo'>
                  <img src={hot4} alt="" />
                  <div>
                    <h3>Classic Hotdog</h3>
                  </div>
                </div>
                <p className='item'>A classic topped with carne and Kachup</p><br />
                <p className="item">$3.49</p>
              </div>
            </li>
            <li>
              <div className='slide'>
                <div className='foodinfo'>
                  <img src={hot3} alt="" />
                  <div>
                    <h3>Mexican Hot Dog</h3>
                  </div>
                </div>
                <p className='item'>Topped with avocado, salsa, jalapeños, and sometimes refried beans.</p><br />
                <p className="item">$10.52</p>
              </div>
            </li>
            <li>
              <div className='slide'>
                <div className='foodinfo'>
                  <img src={hot2} alt="" />
                  <div>
                    <h3>Bacon-Wrapped Hot Dog</h3>
                  </div>
                </div>
                <p className='item'>A hot dog wrapped in bacon and grilled or fried,often topped with grilled onions and peppers.</p><br />
                <p className="item">$8.19</p>
              </div>
            </li>
            <li>
              <div className='slide'>
                <div className='foodinfo'>
                  <img src={hot1} alt="" />
                  <div>
                    <h3>Chili Cheese Dog</h3>
                  </div>
                </div>
                <p className='item'>A classic topped with chili con carne and melted cheddar cheese.</p><br />
                <p className="item">$6.76</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
