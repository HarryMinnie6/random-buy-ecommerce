import React from "react";
import "./Home.css";
import Product from "../product/Product";

function Home() {
  return (
    <div className='home__wrapper'>
    <div className='home__product-wrapper' >
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
        <Product
          id='1'
          title='Dream Catcher'
          price={26}
          rating={4.4}
          image={
            <img
              className='product__image'
              src='https://canary.contestimg.wish.com/api/webimage/5faba1ee06dfbe003e2df625-normal.jpg?cache_buster=a6606243a144c3600c2ff1ec43c8041a'
              alt=''
            />
          }
          discount={20}
        />
        <Product
          id='1'
          title='Megaladon Fishing Rod'
          price={199}
          rating={4.4}
          image={
            <img
              className='product__image'
              src='https://canary.contestimg.wish.com/api/webimage/563420f38739e50132cd35c5-normal.jpg?cache_buster=47179dbe7f529ee115b1911003a3df1f'
              alt=''
            />
          }
          discount={20}
        />
        <Product
          id='1'
          title='Soft Dog Toy'
          price={3}
          rating={4.4}
          image={
            <img
              className='product__image'
              src='https://canary.contestimg.wish.com/api/webimage/5fb49741ef2c14a66b36ea9e-normal.jpg?cache_buster=67ca8baabd35b5e3288b2c196beac3d8'              alt=''
            />
          }
          discount={20}
        />
        <Product
          id='1'
          title='Grinch Face Mask'
          price={10}
          rating={4.4}
          image={
            <img
              className='product__image'
              src='https://canary.contestimg.wish.com/api/webimage/5f96bf91cf3960a6dcee1cd4-normal.jpg?cache_buster=a3cd8ef7ca6e5472c437e970f3687bdb'              alt=''
            />
          }
          discount={20}
        />
        <Product
          id='1'
          title='Boat Propeller'
          price={400}
          rating={4.4}
          image={
            <img
              className='product__image'
              src='https://canary.contestimg.wish.com/api/webimage/598e6a4be1aea10556fb2f84-normal.jpg?cache_buster=80ac51c036124a22c5a8031e97e07a80'              alt=''
            />
          }
          discount={20}
        />
        <Product
          id='1'
          title='Waterproof Tent'
          price={8}
          rating={4.4}
          image={
            <img
              className='product__image'
              src='https://canary.contestimg.wish.com/api/webimage/5b14e15167ce187ae6482cf9-medium.jpg'              alt=''
            />
          }
          discount={20}
        />
        <Product
          id='1'
          title='Golf Clubs'
          price={69}
          rating={4.4}
          image={
            <img
              className='product__image'
              src='https://canary.contestimg.wish.com/api/webimage/5fdacc622e99365ea97c11c4-normal.jpg?cache_buster=cd911a605f0db8a59c04252ae12bf058'              alt=''
            />
          }
          discount={20}
        />
        <Product
          id='1'
          title='Rubber Hands Phone Holder'
          price={0.99}
          rating={4.4}
          image={
            <img
              className='product__image'
              src='https://canary.contestimg.wish.com/api/webimage/5e83371fe3914423c2708653-normal.jpg?cache_buster=5112b6fe43eb12bfa0c7a6ca6eddb7a3'              alt=''
            />
          }
          discount={20}
        />
        <Product
          id='1'
          title='Training clothes '
          price={44}
          rating={4.4}
          image={
            <img
              className='product__image'
              src='https://canary.contestimg.wish.com/api/webimage/54f7fe6c372d4016c9a0498b-medium.jpg'              alt=''
            />
          }
          discount={20}
        />
        <Product
          id='1'
          title='10000pc Pallet Set'
          price={899}
          rating={4.4}
          image={
            <img
              className='product__image'
              src='https://canary.contestimg.wish.com/api/webimage/5dc3c94e77ef3e0edb5fa338-medium.jpg'              alt=''
            />
          }
          discount={20}
        />
        <Product
          id='1'
          title='Animal Cellphone Charger'
          price={3}
          rating={4.4}
          image={
            <img
              className='product__image'
              src='https://canary.contestimg.wish.com/api/webimage/5f0c63ea76d0b303a2aa6787-normal.jpg?cache_buster=5a54ef6d7a704d7e54cf6e66215f1ab7'              alt=''
            />
          }
          discount={20}
        />
        <Product
          id='1'
          title='Camera Tripod'
          price={70}
          rating={4.4}
          image={
            <img
              className='product__image'
              src='https://canary.contestimg.wish.com/api/webimage/5a424dc75983514c2316e247-normal.jpg?cache_buster=86816e74f8c9ff2cdb37def603c648d7'              alt=''
            />
          }
          discount={20}
        />
      </div>
      </div>
    </div>
  );
}

export default Home;
