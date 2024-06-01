import { SxProps, TextField } from '@mui/material';

interface InputTextProps {
  label: string;
  error?: boolean;
  helperText?: string;
  variant?: 'outlined' | 'filled' | 'standard';
  noMarginBottom?: boolean;
  size?: 'small' | 'medium';
}

export const InputText = ({
  label,
  error = false,
  helperText,
  variant = 'outlined',
  noMarginBottom,
  size = 'small',
}: InputTextProps) => {
  const inputStyles: SxProps = {
    marginBottom: noMarginBottom ? 0 : '0.5rem',
  };

  return (
    <TextField
      label={label}
      sx={inputStyles}
      helperText={error ? helperText : null}
      variant={variant}
      error={error}
      size={size}
    />
  );
};
