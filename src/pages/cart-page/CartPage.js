import { Button, Grid, Paper, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import { useNavigate, Link} from 'react-router-dom';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';
import { cartDelete, cartUpdate } from '../../actions/cart';
import { getCart } from '../../helpers/cartGetter';

export const CartPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector(state => state)
  const items = getCart(state)

  let total=  0
  for( let i of items ){
   total = total + i.total
  }
  
  const handleCheckoutClick = () => {
    navigate('/checkout')
  }
  
  const handleAddOne = (item) => {
    const updatedQuantity = {...item, quantity: item.quantity +1,}
    dispatch(cartUpdate(updatedQuantity ))
  }
  const handleSubOne = (item) => {
    const updatedQuantity = {...item, quantity: item.quantity -1}
    dispatch(cartUpdate(updatedQuantity ))
  }

  const handleDeleteItem = (item) => {
    dispatch(cartDelete(item.id))
  }

  
  const itemList = (
    <div className='main-layout'>
      <Paper elevation={1} align="center">
        <Grid  className="layout-card" style={{maxWidth: '900px'}}>
          {
            items.map( item => (
              <Grid key={item.id} container margin="20px 0" style={{borderBottom: '1px solid #ebebeb'}}>
            
                <Grid container item xs={12} margin="20px auto" >
                  <Grid item xs={2}>
                    <img src={item.img} alt="" width='50px' />
                  </Grid>
                  
                  <Grid container item xs={10} spacing={2} alignItems="center">

                    <Grid item xs={12} style={{fontWeight: 'bold' }}>
                      {item.name}
                    </Grid>
                    
                    <Grid item xs={4}>
                      <IconButton color="primary" onClick={() => handleAddOne(item)}>
                        <KeyboardArrowUpIcon />
                      </IconButton>
                      {item.quantity}
                      <IconButton color="primary" onClick={() => handleSubOne(item)}>
                        <KeyboardArrowDownIcon />
                      </IconButton>
                    </Grid>

                    <Grid item xs={4}>
                      $ {item.total}
                    </Grid>

                    <Grid item xs={4}>
                      <IconButton color="error" size="small" onClick={() => handleDeleteItem(item)}>
                        <DeleteIcon />
                      </IconButton>
                    </Grid>

                  </Grid>
                  
                </Grid>

              </Grid>
              
            ))
          }
          <Typography variant="h6" style={{marginTop: '50px', textAlign:'Left'}}>
            <strong>Total:</strong> $ {total}

          </Typography>
          <Button
            type='submit' 
            color='primary' 
            variant="contained" 
            onClick={handleCheckoutClick} 
            style={{margin: '30px auto', width: '200px'}}
          >
            Checkout
          </Button>
        </Grid>
      </Paper>
    </div>
    
  )

  const noItems = (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '90vh'}}>
      <h3>No tienes items en el carrito</h3>
      <Link to="/">Comprar</Link>
    </div>
  )

  return (
    <>
      {items.length > 0 ? itemList : noItems}
    </>
  )
}
