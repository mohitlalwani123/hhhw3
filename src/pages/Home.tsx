import React from 'react';
import ShopByCategory from '../components/ShopByCategory';
import NewArrivals from '../components/NewArrivals';
import Reviews from '../components/Reviews';

const Home = () => {
  return (
    <>
      <ShopByCategory />
      <NewArrivals />
      <Reviews />
    </>
  );
};

export default Home;