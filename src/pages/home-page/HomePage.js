import { Grid } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { cleanOrder } from '../../actions/checkout'
import { ProductCard } from '../../components/product-card/ProductCard'

export const HomePage = () => {

  const {source} = useSelector(state => state.products);
  const location = useLocation()

  const {order} = useSelector(state => state.checkout)
  const dispatch = useDispatch();

  if(order !== ""){
    dispatch( cleanOrder() )
  }
  

  const usp = new URLSearchParams(location.search);

  const items = usp.get("s")
		? source.filter((val) =>
				val.name.toLowerCase().includes(usp.get("s").toLowerCase())
		  )
		: source;

  return (
    <Grid className='main-layout'>
      
        <Grid container align='center' style={{margin: '10px 0'}} >
          {
            items.map( product => (
              <Grid key={product.id} item xs={12} sm={12} md={6} lg={3} style={{padding: '10px'}}>
                <ProductCard item={product}/>
              </Grid>
            ))
          }
        </Grid>
      

    </Grid>
  )
}
