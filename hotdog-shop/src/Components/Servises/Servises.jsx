import React from 'react';
import './Servises.css';
import open from '../../assets/open.png';
import order from '../../assets/order.png';
import deliver from '../../assets/delivery.png';
import open_icon from '../../assets/open-icon.png';
import order_icon from '../../assets/order-icon.png';
import delivery_icon from '../../assets/delivery-icon.png';

const Servises = () => {
  return (
    <div className='servises-container'>
      <h2 className="title">Our Services</h2>
      <p className="subtitle">What We Offer</p>
      <div className='Servises'>
        <div className='Servis'>
          <img src={open} alt="Open" />
          <div className='caption'>
            <img src={open_icon} alt="" />
            <p>We Are Now Open 24X7</p>
          </div>
        </div>
        <div className='Servis'>
          <img src={order} alt="Order" />
          <div className='caption'>
            <img src={order_icon} alt="" />
            <p>Call And Order Now!</p>
          </div>
        </div>
        <div className='Servis'>
          <img src={deliver} alt="Delivery" />
          <div className='caption'>
            <img src={delivery_icon} alt="" />
            <p>Countrywide delivery service</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servises;
