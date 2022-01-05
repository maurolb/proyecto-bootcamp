import React from 'react'
import { CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Review } from './Review';
import { Button, Divider, Typography } from '@mui/material';
import { useDispatch, useSelector} from 'react-redux';
import { newOrder } from '../../actions/checkout';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

export const PaymentForm = ({backStep, nextStep , shippingData}) => {
  const {items} = useSelector(state => state.cart)
  const dispatch = useDispatch();

  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if(!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement)

    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement})

    if(error){
      console.log(error);
    } else {
      const orderData = {
        items: items,
        customer: { 
          firstname: shippingData.firstName, 
          lastname: shippingData.lastName, 
          email: shippingData.email
        },
        shipping: { 
          name: 'Primary', 
          street: shippingData.address, 
          town_city: shippingData.city,
          country_state: shippingData.shippingSubdivision,
          postal_code: shippingData.postalCode,
          country: shippingData.shippingCountry,
        },
        fulfillment: { shipping_method: shippingData.shippingOption},
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id
          }
        }
      }
      nextStep()
      setTimeout(() => {
        dispatch( newOrder(orderData) )
      }, 2000);
              
    }
  }

  return (
    <>
      <Review />
      <Divider />
      <Typography variant="h6" gutterBottom style={{margin: '20px 0'}} >Método de pago</Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {
            ({elements, stripe}) => (
              <form onSubmit={ e => handleSubmit(e, elements, stripe)}>
                <CardElement />
                <br /> <br />
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                  <Button variant="outlined" onClick={backStep}>Atras</Button>
                  <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                    Pagar
                  </Button>
                </div>
              </form>
            )
          }
        </ElementsConsumer>
      </Elements>
    </>
  )
}
