import React, { useState } from 'react'
import { Button, CircularProgress, Divider, Grid, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

import { AddresForm } from './AddresForm';
import { PaymentForm } from './PaymentForm';
import { useDispatch, useSelector } from 'react-redux';
import { cleanOrder } from '../../actions/checkout';


const steps = ['Datos de envío', 'Detalles de pago']

export const CheckoutPage = () => {


  const [activeStep, setActiveStep] = useState(0)
  const [shippingData, setShippingData] = useState({})
  const {order} = useSelector(state => state.checkout)
  const dispatch = useDispatch();

  const nextStep = () => setActiveStep( (prevActiveStep) => prevActiveStep +1)
  const backStep = () => setActiveStep( (prevActiveStep) => prevActiveStep -1)

  const test = (data) =>{
    setShippingData(data)
    nextStep()
  }

  const Confirmation = () => (order.customer ? (
    <>
      <div>
        <Typography variant="h5" margin="40px 0">Gracias por su compra {order.customer.firstname} {order.customer.lastname}!</Typography>
        <Typography variant="subtitle2" gutterBottom>Transacción realizada con éxito</Typography>
        <Divider />
      </div>
      <br />
      <Button component={Link} variant="outlined" type="button" to="/" onClick={() => { dispatch( cleanOrder() )}}>Ir al inicio</Button>
    </>
  ) : (
    <div style={{margin: '40px 0'}}>
      <CircularProgress/>
    </div>
  ))

  const Form = () => activeStep === 0
    ? <AddresForm test={test} setShippingData={setShippingData}/>
    : <PaymentForm shippingData={shippingData} backStep={backStep} nextStep={nextStep}/>

  return (
    <div className='main-layout'>
      <Paper elevation={1} align="center">
        <Grid className='layout-card' margin="20px auto" style={{maxWidth: '600px'}}>
          
          <Typography variant="h4" align="center" gutterBottom>Checkout</Typography>
          <Stepper activeStep={activeStep}>
            {
              steps.map( step => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))
            }
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Grid>
      </Paper>
    </div>
  )
}
