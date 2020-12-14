import React from "react";
import "./Home.css";
import Product from "../product/Product";

function Home() {
  return (
    <div className='home__wrapper'>
      <div className='home__product-display'>
        <Product
          id='1'
          title='Large Bed Cusion'
          price={80}
          rating={4.4}
          image={
            <img
              className='product__image'
              src='https://canary.contestimg.wish.com/api/webimage/5fa1019f129dd3eb8341af99-normal.jpg?cache_buster=2b3449f62f0d4dd751d38e9e180a9331'
              alt=''
            />
          }
          discount={20}
        />
        <Product
          id='1'
          title='Day Night Glasses'
          price={9}
          rating={4.4}
          image={
            <img
              className='product__image'
              src='https://canary.contestimg.wish.com/api/webimage/5fbb5e4bc4f5e9530626bb0b-normal.jpg?cache_buster=c7578d6ceeda5fca3d4c4f6496415b8e'
              alt=''
            />
          }
          discount={20}
        />
        <Product
          id='1'
          title='Cell Phone Cable'
          price={2}
          rating={4.4}
          image={
            <img
              className='product__image'
              src='https://canary.contestimg.wish.com/api/webimage/5f107b2c0d0a78003c1634b6-normal.jpg?cache_buster=1e2275b109c216b3cdfd89b11691894a'
              alt='d'
            />
          }
          discount={20}
        />
        <Product
          id='1'
          title='Winter Gloves'
          price={12}
          rating={4.4}
          image={
            <img
              className='product__image'
              src='https://canary.contestimg.wish.com/api/webimage/5c4a04c50319455f034f53f1-normal.jpg?cache_buster=112907e718cb722857251b7e805c0260'
              alt=''
            />
          }
          discount={20}
        />
        <Product
          id='1'
          title='Cooking Thermometer'
          price={10}
          rating={4.4}
          image={
            <img
              className='product__image'
              src='https://canary.contestimg.wish.com/api/webimage/5d230ce2bd7e6f3513f2605a-normal.jpg?cache_buster=123959c619e63f208345f42ffe1cbce7'
              alt=''
            />
          }
          discount={20}
        />
        <Product
          id='1'
          title='Bicycle Phone Holder'
          price={15}
          rating={4.4}
          image={
            <img
              className='product__image'
              src='https://canary.contestimg.wish.com/api/webimage/5fb97127496eab7201c047c8-normal.jpg?cache_buster=b06dc7dc986962f7e6cc9e68a4db8c88'
              alt=''
            />
          }
          discount={20}
        />
      </div>
    </div>
  );
}

export default Home;
