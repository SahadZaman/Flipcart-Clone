import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/Action/ProductActions';
// imported file
import NaveBar from './NaveBar';
import Banner from './Banner';
import Slide from './Slide';
import MidleSlide from './MidleSlide';
import MidleSection from './MidleSection';
//mui styling component.
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Box)({
  padding: "10px",
  backgroundColor: "#F2F2F2",
});

const Home = () => {
  const { products } = useSelector(state => state.getProducts)
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getProducts() );
  }, [dispatch]);
  

  return (
    <>
      <NaveBar />
      <Container>
        <Banner />
        <MidleSlide products={products} title="Deal of the Day" timer={true}/>
        <MidleSection />
        <Slide products={products} title="Discount for you" timer={false}/>
        <Slide products={products} title="Suggesting Item" timer={false}/>
        <Slide products={products} title="Top Selection" timer={false}/>
        <Slide products={products} title="Recommended Item" timer={false}/>
        <Slide products={products} title="Trending offers" timer={false}/>
        <Slide products={products} title="Season top Piks" timer={false}/>
        <Slide products={products} title="Top Deals on acessorys" timer={false}/>
      </Container>
    </>
  )
}

export default Home