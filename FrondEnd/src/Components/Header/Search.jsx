
import { React, useState, useEffect } from 'react';
import { InputBase, Box, List, ListItem } from '@mui/material';
import { styled } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../Redux/Action/ProductActions'
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)(({
  background: "#fff",
  width: "38%",
  borderRadius: "2px",
  marginLeft: "10px",
  display: "flex",
}));
const InputSearchBase = styled(InputBase)(({
  paddingLeft: "20px",
  width: "100%",
  fontSize: "unset",
}));
const SearchIconWraper = styled(Box)(({
  color: "blue",
  padding: "5px",
  display: "flex",
}));
const ListWraper = styled(List)(({
  position: "absolute",
  background: "#FFFFFF",
  color: "#000",
}));

const Search = () => {
  const [text, setText] = useState()

  const { products } = useSelector(state => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])


  const getText = (text) => {
    setText(text)
  }

  return (
    <SearchContainer>
      <InputSearchBase placeholder='Search for products,brands and more '
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <SearchIconWraper>
        <SearchIcon />
      </SearchIconWraper>
      {
        text &&
        <ListWraper>
          {
            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
              <ListItem>
                <Link to={`/product/${product.id}`} onClick={()=>setText('')}
                style={{textDecoration:"none",color:"inherit"}}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))
          }
        </ListWraper>
      }
    </SearchContainer>
  )
}

export default Search