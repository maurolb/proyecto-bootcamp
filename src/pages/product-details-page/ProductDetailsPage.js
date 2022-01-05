import { AlertTitle, Button, Grid, Link, Paper, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { cartAddNew } from '../../actions/cart'

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export const ProductDetailsPage = () => {

  const {source:products} = useSelector(state => state.products)
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch()

  const product = products.find( p => p.id === Number(id))

  const handleAddItemToCart = () => {
    dispatch( cartAddNew(product) );
    handleClick()
  }

  const Alert = React.forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	});

	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleGoToCart = () => {
    navigate('/cart')
  }

  return (
    <div className='main-layout'>
      <Paper elevation={1}>
        
        <Grid container className="layout-card">
          <Grid item xs={12} md={7}>
            <img src={product.img} 
              alt="product-img"
              height="300px"
              width="100%"
              style={{objectFit: 'scale-down', borderRadius: '10px'}}
            />
          </Grid>
            
          <Grid item align='center' xs={12} md={5}>
            <h2>{product.name}</h2>
            <h3>$ {product.price}</h3>
            <p>stock: {product.stock}</p>

            <Typography variant="body2" color="text.secondary">
              {product.specs}
            </Typography>

            <Button 
              type='submit' 
              color='primary' 
              variant="contained" 
              fullWidth style={{marginTop: '30px', width: '200px'}}
              onClick={handleAddItemToCart}
            >
              Agregar al carrito
            </Button>
          </Grid>
        </Grid>
        
      </Paper>
      <Snackbar 
        open={open} 
        autoHideDuration={6000} 
        onClose={handleClose} 
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
      >
				<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          <AlertTitle>Item agregado al carrito</AlertTitle>
					Pasar al carrito para completar la compra <br />
          <Link color="inherit" onClick={handleGoToCart} style={{cursor: 'pointer'}}>Ir al carrito</Link>
				</Alert>
			</Snackbar>
    </div>
  )
}
