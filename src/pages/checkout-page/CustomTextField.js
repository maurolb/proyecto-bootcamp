import React from 'react'
import { Grid, TextField } from '@mui/material';
import { Controller, useFormContext } from "react-hook-form";

export const FormInput = ({name, label}) => {

  const { control } = useFormContext();

  return (
    <Grid item xs={12} md={6}>
      <Controller
        render={({ field: { onChange } }) => 
          <TextField
            fullWidth
            label={label}
            variant="standard"
            onChange={onChange}
            required
          />
        }
        
        control={control}
        name={name}
        
      />
    </Grid>
  )
}
