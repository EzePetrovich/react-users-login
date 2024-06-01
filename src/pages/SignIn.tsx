import React from 'react';
import { Paper } from '@mui/material';
import { BoxFlex } from '@src/components/global/BoxFlex';
import { InputSelect } from '@src/components/global/InputSelect';
import { InputText } from '@src/components/global/InputText';

export const SignIn = () => {
  return (
    <Paper sx={{ padding: '0 2rem 2rem 2rem' }}>
      <h3>Registro</h3>
      <BoxFlex flexDirection='column' component='form'>
        <InputText label='Nombre de usuario' />
        <InputText label='Correo electrónico' />
        <InputSelect
          label='Sexo'
          options={[
            { label: 'Masculino', value: 'M' },
            { label: 'Femenino', value: 'F' },
          ]}
        />
        <InputText label='Contraseña' />
        <InputText label='Confirmar contraseña' noMarginBottom />
      </BoxFlex>
    </Paper>
  );
};
