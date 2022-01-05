import React, { useEffect, useState } from 'react'
import { Button, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { useForm, FormProvider } from 'react-hook-form'
import { FormInput } from './CustomTextField'
import { Link } from 'react-router-dom'

const getCountries = () => {
  return {
    AR: "Argentina",
    MX: "México",
    PY: "Paraguay"
  }
}

const getSubdivisions = (country) => {
  if(country === 'AR'){ 
    return {
      ba:"Buenos Aires", 
      fo:"Formosa", 
      co:"Corrientes", 
      mi:"Misiones"
    }
  }
  if(country === 'MX'){
    return {
      ch:"Chihuahua", 
      cm:"Ciudad de México", 
      ve:"Veracruz", 
      ta:"Tamaulipas"
    }
  }
  if(country === 'PY'){
    return {
      as:"Asunsion", 
      co:"Concepcion", 
      ap:"Alto Paraguay", 
      am:"Amambay"
    }
  }
}

const getPrices = (country) => {
  if(country === 'AR'){
    return [
      {
        id: '123',
        description: 'Nacional',
        price: '0.00 ARS'
      }
    ]
  }
  if(country === 'MX'){
    return [
      {
        id: '456',
        description: 'Internacional',
        price: '1500.00 ARS'
      }
    ]
  }
  if(country === 'PY'){
    return [
      {
        id: '789',
        description: 'Internacional',
        price: '500.00 ARS'
      }
    ]
  }
}



export const AddresForm = ({test}) => {
  const [shippingCountries, setShippingCountries] = useState([])
  const [shippingCountry, setShippingCountry] = useState('')
  const [shippingSubdivisions, setShippingSubdivisions] = useState([])
  const [shippingSubdivision, setShippingSubdivision] = useState('')
  const [shippingOptions, setShippingOptions] = useState([])
  const [shippingOption, setShippingOption] = useState('')
  const methods = useForm()

  const countries = Object.entries(shippingCountries).map( ([code, name]) => ({ id: code, label: name }))
  const subdivisions = Object.entries(shippingSubdivisions).map( ([code, name]) => ({ id: code, label: name }))
  const options = shippingOptions.map( (option) => ({id: option.id, label: `${option.description} - ${option.price}` }))
  

  const fetchShippingCountries = () => {
    const countries = getCountries()
    setShippingCountries(countries)
    setShippingCountry(Object.keys(countries)[0])
  }

  const fetchShippingSubdivisions = (countryCode) => {
    const subdivisions = getSubdivisions(countryCode)
    setShippingSubdivisions(subdivisions)
    setShippingSubdivision(Object.keys(subdivisions)[0])
  }

  const fetchShippingOptions = (countryCode) => {
    const options = getPrices(countryCode)
    setShippingOptions(options)
    setShippingOption(options[0].id)
  }


  useEffect(() => {
    fetchShippingCountries()
  }, [])

  useEffect(() => {
    if(shippingCountry) fetchShippingSubdivisions(shippingCountry)
    if(shippingCountry) fetchShippingOptions(shippingCountry)
  }, [shippingCountry])

  return (
    <>
      <Typography variant="h6" gutterBottom marginTop="20px">Datos de envío</Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => test({...data, shippingCountry, shippingSubdivision, shippingOption}))}>
          <Grid container spacing={3} align="left">
            <FormInput name="firstName" label="Nombre" />
            <FormInput name="lastName" label="Apellido" />
            <FormInput name="address" label="Dirección" />
            <FormInput name="email" label="Email" />
            <FormInput name="city" label="Ciudad" />
            <FormInput name="postalCode" label="Código postal" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Pais de envio</InputLabel>
              <Select value={shippingCountry} fullWidth size='small' onChange={ (e) => setShippingCountry(e.target.value) }>
                {
                  countries.map( country => (
                    <MenuItem key={country.id} value={country.id}>
                      {country.label}
                    </MenuItem>
                  ))
                }
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Subdivisión de envio</InputLabel>
              <Select value={shippingSubdivision} fullWidth size='small' onChange={ (e) => setShippingSubdivision(e.target.value) }>
                {
                  subdivisions.map( subdivision => (
                    <MenuItem key={subdivision.id} value={subdivision.id}>
                      {subdivision.label}
                    </MenuItem>
                  ))
                }
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Opciones de envio</InputLabel>
              <Select value={shippingOption} fullWidth size='small' onChange={ (e) => setShippingOption(e.target.value) }>
                {
                  options.map( option => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.label}
                    </MenuItem>
                  ))
                }
              </Select>
            </Grid>
          </Grid>
          <br/>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant='outlined' component={Link} type="button" to="/cart">
                Volver al carrito
            </Button>
            <Button type='submit' variant="contained" color="primary">
                Siguiente
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  )
}
