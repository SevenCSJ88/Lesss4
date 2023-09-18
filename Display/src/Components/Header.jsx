import React from 'react';

import HeaderItem from './HeaderItem'; 
import { faTh, faWrench, faClock, faGift, faGem } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="header">
      
      <nav className="nav">
        <ul className='nav-menu'><HeaderItem icon={faTh} id="category" text="Danh mục sản phẩm"  /></ul>
        <ul className="nav-list">
          <HeaderItem icon={faWrench} id="professional" text="Giao lắp chuyên nghiệp"  />
          <HeaderItem icon={faClock} id="warranty" text="Bảo hành nhanh gọn"  />
          <HeaderItem icon={faGift} id="promotions" text="Tổng hợp khuyến mãi"  />
          <HeaderItem icon={faGem} id="luxury" text="Nguyễn Kim Luxury"/>
        </ul>
      </nav>
    </header>
  );
}



export default Header;


