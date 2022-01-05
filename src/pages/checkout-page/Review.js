import { List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export const Review = () => {

  const {items} = useSelector(state => state.cart)

  let total=  0
  for( let i of items ){
   total += i.price
  }
  
  return (
    <>
      <Typography variant="h6" marginTop="20px" gutterBottom>Resumen</Typography>
      <List disablePadding>
        {
          items.map((product) => (
            <ListItem style={{padding: '10px 0'}} key={product.id}>
              <ListItemText primary={product.name} secondary={`cantidad: ${product.quantity}`} />
              <Typography variant='body2'>$ {product.price}</Typography>
            </ListItem>
          ))
        }
        <ListItem style={{padding: '10px 0'}}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
            $ {total}
          </Typography>
        </ListItem>
      </List>
    </>
  )
}
