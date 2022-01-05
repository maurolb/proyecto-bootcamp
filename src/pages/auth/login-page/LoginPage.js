import React from 'react'
import { Avatar, Button, Grid, Paper, TextField } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../../actions/auth';

import '../style.css'

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch( startLogin({uid: 'fakeuid', name: 'fulanito'}) );
  }

  return (
    <Paper elevation={10} className='container'>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        
        validate={ (values)=> {
          let errors = {};

          // email
          if(!values.email){
          errors.email = 'Ingese email'
          }
          else if(!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(values.email)){
            errors.email = 'Ingrese un email válido'
          }

          // passowrd
          if(!values.password){
          errors.password = 'Ingese contraseña'
          }
          else if(!/^.{4,12}$/.test(values.password)){
            errors.password = 'La contraseña debe tener entre 4 y 12 dígitos'
          }
          
          return errors;
        }}

        onSubmit={ (values, {resetForm}) =>{
          resetForm();
          navigate('/')
          handleLogin()
        }}
      >
        {
          ({values, handleBlur, touched ,errors, handleChange}) => (
            <Form>
              <Grid align='center'>
                <Avatar style={{backgroundColor: '#1bbd7e'}}>
                  <LockOutlinedIcon/>
                </Avatar>
                <h2>Login</h2>
              </Grid>

              
              <TextField 
                id="email"
                label="Email" 
                placeholder='Ingresar correo' 
                variant="standard" 
                type='email' 
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.email && errors.email}
                error={touched.email && Boolean(errors.email)}
                fullWidth  
                style={{margin: '10px 0'}}
              />

              <TextField
                id="password"
                label="Contraseña"
                placeholder='Ingresar contraseña' 
                variant="standard" 
                type='password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.password && errors.password}
                error={touched.password && Boolean(errors.password)}
                fullWidth
                style={{margin: '10px 0'}}
              />

              <Button
                type='submit' 
                color='primary'
                variant="contained"
                fullWidth 
                style={{margin: '30px 0'}}
              >
                Ingresar
              </Button>
              
              <Link to="/auth/register">
                Registrarse
              </Link>
            </Form>
          )
        }
      </Formik>
    </Paper>
    
  )
}
