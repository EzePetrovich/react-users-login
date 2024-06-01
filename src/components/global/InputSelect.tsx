import { MenuItem, SxProps, TextField } from '@mui/material';

interface SelectOption {
  label: string;
  value: number | string;
}

interface InputSelectProps {
  label: string;
  error?: boolean;
  helperText?: string;
  variant?: 'outlined' | 'filled' | 'standard';
  noMarginBottom?: boolean;
  size?: 'small' | 'medium';
  options: SelectOption[];
}

export const InputSelect = ({
  label,
  error,
  helperText,
  variant,
  noMarginBottom,
  size = 'small',
  options = [],
}: InputSelectProps) => {
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
      select
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
